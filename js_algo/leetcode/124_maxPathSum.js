// https://leetcode.com/problems/binary-tree-maximum-path-sum/

import TreeNode from '/utils/treeNode'

const maxPathSum = (root) => {
    let max = root.val
    const dfs = (node = root) => {
        if (!node) {
            return 0
        }

        const left = Math.max(dfs(node.left), 0)
        const right = Math.max(dfs(node.right), 0)

        max = Math.max(max, node.val + left + right)

        return Math.max(node.val, node.val + left, node.val + right)
    }

    dfs()

    return max
}

const run = () => {
    // const root = new TreeNode(1)
    // root.left = new TreeNode(-2)
    // root.right = new TreeNode(3) // 4

    // const root = new TreeNode(1)
    // root.left = new TreeNode(2)
    // root.right = new TreeNode(3) // 6

    // const root = new TreeNode(-1)
    // root.left = new TreeNode(5)
    // root.left.left = new TreeNode(4)
    // root.left.left.right = new TreeNode(2)
    // root.left.left.right.left = new TreeNode(-4) // 11

    // const root = new TreeNode(-1)
    // root.left = new TreeNode(-2)
    // root.left.left = new TreeNode(-6)
    // root.right = new TreeNode(10)
    // root.right.left = new TreeNode(-3)
    // root.right.right = new TreeNode(-6) // 10

    const root = new TreeNode(-3) // -3

    const result = maxPathSum(root)

    console.log(result)
}

export default run
