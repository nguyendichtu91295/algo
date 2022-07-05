// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
import TreeNode from '/utils/treeNode'

const lowestCommonAncestor = (root, p, q) => {
    const dfs = (node = root) => {
        if (!node) {
            return null
        }

        if (node.val === p || node.val === q) {
            return node
        }

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (left && right) {
            return node
        }

        return left || right
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

    const result = lowestCommonAncestor(root, 7, 2)

    console.log(result)
}

export default run
