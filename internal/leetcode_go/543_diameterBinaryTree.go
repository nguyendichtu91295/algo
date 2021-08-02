package leetcode_go

import (
	"math"

	"github.com/nguyendichtu91295/algo/internal/base"
)

var (
	diameter float64 = 0
)

func DiameterOfBinaryTree(root *base.TreeNode) int {
	diameter = 0

	if root == nil {
		return 0
	}

	traverseNode(root)

	return int(diameter)
}

func traverseNode(node *base.TreeNode) float64 {
	if node == nil {
		return 0
	}

	left := traverseNode(node.Left)
	right := traverseNode(node.Right)

	temp := left + right

	if temp > diameter {
		diameter = temp
	}

	return 1 + math.Max(float64(left), float64(right))
}
