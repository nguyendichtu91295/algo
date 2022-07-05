// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import TreeNode from '/utils/treeNode'

const maxDepth = (root) => {

	const dfs = (node = root) => {
		if (!node) {
			return 0
		}

		let leftMax = 1
		leftMax += dfs(node.left)
		let rightMax = 1
		rightMax += dfs(node.right)

		return Math.max(leftMax, rightMax)
	}

	return dfs()
};

const run = () => {
	const root = new TreeNode(3)
	root.left = new TreeNode(9)
	root.right = new TreeNode(20)
	root.right.left = new TreeNode(15)
	root.right.right = new TreeNode(7)
    const result = maxDepth(root)

    console.log(result)
}

export default run
