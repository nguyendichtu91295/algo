// https://leetcode.com/problems/invert-binary-tree/
import TreeNode from '/utils/treeNode'

const invertTree = (root) => {
	const bfs = (node = root) => {
		if (!node) {
			return
		}

		const temp = node.left
		node.left = node.right
		node.right = temp

		bfs(node.left)
		bfs(node.right)
	}

	bfs()

	return root
}

const run = () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)

    const result = invertTree(root)

    console.log(result)
}

export default run
