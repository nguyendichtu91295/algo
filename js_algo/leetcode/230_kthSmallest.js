// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

import TreeNode from "/utils/treeNode";

const kthSmallest = (root, k) => {
	const stack = []
	let count = 0
	let node = root

	while (node || stack.length) {
		while (node) {
			stack.push(node)
			node = node.left
		}

		node = stack.pop()
		count += 1

		if (count === k) {
			return node.val
		}

		node = node.right
	}
};

const run = () => {
	const root = new TreeNode(3)
	root.left = new TreeNode(1)
	root.left.right = new TreeNode(2)
	root.right = new TreeNode(4)

    const result = kthSmallest(root, 1)

    console.log(result)
}

export default run
