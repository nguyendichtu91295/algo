// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

import TreeNode from '/utils/treeNode'

const buildTree = (preorder, inorder) => {
    const obj = {}

    for (let i = 0; i < inorder.length; i++) {
        const ele = inorder[i]

        obj[ele] = i
    }

    let i = 0
    const helper = (start, end) => {
        if (end === start) {
            return new TreeNode(inorder[start])
        }

        const root = new TreeNode(preorder[i])

        if (start <= obj[root.val] - 1) {
            i += 1
            root.left = helper(start, obj[root.val] - 1)
        }

        if (obj[root.val] + 1 <= end) {
            i += 1
            root.right = helper(obj[root.val] + 1, end)
        }

        return root
    }

    return helper(0, inorder.length - 1)
}

const run = () => {
    // const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
    // const result = buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7])
    const result = buildTree([1, 2, 3], [1, 2, 3])
    // const result = buildTree([3, 2, 1, 4], [1, 2, 3, 4])
    // const result = buildTree([1, 2], [2, 1])
    // const result = buildTree([1, 2], [1, 2])
    // const result = buildTree([1, 2, 3], [2, 3, 1])
    // const result = buildTree(
    //     [6, 2, 0, 4, 3, 5, 8, 7, 9],
    //     [0, 2, 3, 4, 5, 6, 7, 8, 9]
    // )

    console.log(result)
}

export default run
