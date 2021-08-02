package leetcode_go

import (
	"fmt"
	"strings"

	"github.com/nguyendichtu91295/algo/internal/base"
)

var left, right []string

func traverseLeft(node *base.TreeNode) {
	if node == nil {
		left = append(left, "-1")
		return
	}

	left = append(left, fmt.Sprintf("%v", node.Val))

	traverseLeft(node.Left)
	traverseLeft(node.Right)
}

func traverseRight(node *base.TreeNode) {
	if node == nil {
		right = append(right, "-1")
		return
	}

	right = append(right, fmt.Sprintf("%v", node.Val))

	traverseRight(node.Right)
	traverseRight(node.Left)
}

func IsSymmetric(root *base.TreeNode) bool {
	if root.Left == nil && root.Right == nil {
		return true
	}

	traverseLeft(root.Left)
	traverseRight(root.Right)

	left_string := strings.Join(left, "")
	right_string := strings.Join(right, "")

	return left_string == right_string
}

// func main() {
// 	root := setupTree()
// 	t1 := time.Now()
// 	result := isSymmetric(&root)
// 	t2 := time.Now()

// 	// fmt.Printf("Left: %v\n", left)
// 	// fmt.Printf("Right: %v\n", right)

// 	fmt.Println(result)
// 	fmt.Printf("Duration: %v\n", t2.Sub(t1))
// }
