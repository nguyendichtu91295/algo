package base

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func SetupTree() *TreeNode {
	root := &TreeNode{
		Val: 15,
	}

	// root.Left = &TreeNode{
	// 	Val: 13,
	// }

	root.Right = &TreeNode{
		Val: 20,
	}

	// root.Left.Left = &TreeNode{
	// 	Val: 12,
	// }

	// root.Left.Right = &TreeNode{
	// 	Val: 14,
	// }

	// root.Right.Left = &TreeNode{
	// 	Val: 18,
	// }

	// root.Right.Right = &TreeNode{
	// 	Val: 24,
	// }

	// root.Left.Left.Left = &TreeNode{
	// 	Val: 11,
	// }

	// root.Right.Left.Left = &TreeNode{
	// 	Val: 23,
	// }

	// root.Right.Left.Right = &TreeNode{
	// 	Val: 25,
	// }

	// root.Right.Right.Right = &TreeNode{
	// 	Val: 7,
	// }

	return root
}
