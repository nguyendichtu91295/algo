// https://leetcode.com/problems/same-tree/

import TreeNode from '/utils/treeNode'

const isSameTree = (p, q) => {
    if ((!p && q) || (!q && p)) {
        return false
    }

    const dfs = (nodeA = p, nodeB = q) => {
        if ((!nodeA && nodeB) || (!nodeB && nodeA)) {
            return false
        }

        if (!nodeA && !nodeB) {
            return true
        }

        if (
            (nodeA && nodeA.val) !== (nodeB && nodeB.val) ||
            !dfs(nodeA.left, nodeB.left) ||
            !dfs(nodeA.right, nodeB.right)
        ) {
            return false
        }

        return true
    }

    return dfs()
}

const run = () => {
    const p = new TreeNode(6)
    p.left = new TreeNode(2)
    p.right = new TreeNode(8)

    p.left.left = new TreeNode(0)
    p.left.right = new TreeNode(4)
    p.left.right.left = new TreeNode(3)
    p.left.right.right = new TreeNode(5)

    p.right.left = new TreeNode(7)
    p.right.right = new TreeNode(9)

    const q = new TreeNode(6)
    q.left = new TreeNode(2)
    q.right = new TreeNode(8)

    q.left.left = new TreeNode(0)
    q.left.right = new TreeNode(4)
    q.left.right.left = new TreeNode(3)
    q.left.right.right = new TreeNode(5)

    q.right.left = new TreeNode(7)
    q.right.right = new TreeNode(9)

    const result = isSameTree(p, q)

    console.log(result)
}

export default run
