//  https://leetcode.com/problems/validate-binary-search-tree/
import TreeNode from '/utils/TreeNode'

const isValidBST = (root) => {
    const dfs = (node = root, range = [-Infinity, Infinity]) => {
        if (!node) {
            return true
        }

		if (node.val <= range[0] || node.val >= range[1]) {
			return false
		}

		if (!dfs(node.left, [range[0], node.val])) {
			return false
		}

		if (!dfs(node.right, [node.val, range[1]])) {
			return false
		}

        return true
    }

    return dfs()
}

const run = () => {
    const root = new TreeNode(2)
    root.left = new TreeNode(1)
    root.right = new TreeNode(3)

    const result = isValidBST(root)

    console.log(result)
}

export default run
