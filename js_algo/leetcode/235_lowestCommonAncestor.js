// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

import TreeNode from '/utils/treeNode'

const lowestCommonAncestor = (root, p, q) => {
    const min = Math.min(p, q)
    const max = Math.max(p, q)

    const dfs = (node = root) => {
        if (node.val <= max && node.val >= min) {
            return node
        }

        if (node.val > min && node.val > max) {
            return dfs(node.left)
        }

        if (node.val < min && node.val < max) {
            return dfs(node.right)
        }
    }

    return dfs()
}

const run = () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)
    root.right = new TreeNode(8)

    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(9)

    const result = lowestCommonAncestor(root, 2, 8)

    console.log(result)
}

export default run
