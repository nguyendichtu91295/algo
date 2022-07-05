// https://leetcode.com/problems/subtree-of-another-tree/

import TreeNode from '/utils/treeNode'

const isSubtree = (root, subRoot) => {
    const dfsSubRoot = (subNode = subRoot, node) => {
        if (!subNode && !node) {
            return true
        }

        if (
            (!node && subNode) ||
            (!subNode && node) ||
            subNode.val !== node.val
        ) {
            return false
        }

        const left = dfsSubRoot(subNode.left, node.left)
        if (!left) {
            return left
        }
        const right = dfsSubRoot(subNode.right, node.right)
        if (!right) {
            return right
        }

        return true
    }

    const dfs = (node = root) => {
        if (!node) {
            return false
        }

        if (node.val === subRoot.val) {
            const result = dfsSubRoot(subRoot, node)

            if (result) {
                return true
            }
        }

        const left = dfs(node.left)
        if (left) {
            return left
        }
        const right = dfs(node.right)
        if (right) {
            return right
        }

        return false
    }

    return dfs()
}

const run = () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(5)
    root.right = new TreeNode(1)

    root.left.left = new TreeNode(6)
    root.left.right = new TreeNode(2)
    root.left.right.left = new TreeNode(7)
    root.left.right.right = new TreeNode(4)

    root.right.left = new TreeNode(0)
    root.right.right = new TreeNode(8)

    const subRoot = new TreeNode(2)
    subRoot.left = new TreeNode(7)
    subRoot.right = new TreeNode(4)

    const result = isSubtree(root, subRoot)

    console.log(result)
}

export default run
