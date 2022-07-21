// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

import TreeNode from '/utils/treeNode'

const buildTree = (preorder, inorder) => {
    const hashObj = {}
    let start = 0

    inorder.forEach((item, index) => {
        hashObj[item] = index
    })

    const helper = (inorderStart = 0, inorderEnd = preorder.length) => {
        if (inorderEnd - inorderStart === 1) {
            return new TreeNode(inorder[inorderStart])
        }

        const rootValue = preorder[start]
        const root = new TreeNode(rootValue)

        if (rootValue !== inorder[inorderStart]) {
            start += 1
            root.left = helper(inorderStart, hashObj[rootValue])
        }

		if (hashObj[rootValue] + 1 < inorderEnd) {
			start += 1
			root.right = helper(hashObj[rootValue] + 1, inorderEnd)
		}

        return root
    }

    return helper()
}

const run = () => {
    // const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
    // const result = buildTree([3, 2, 1, 4], [1, 2, 3, 4])
    // const result = buildTree([1, 2], [2, 1])
    // const result = buildTree([1, 2], [1, 2])
    const result = buildTree([1, 2, 3], [2, 3, 1])
    // const result = buildTree(
    //     [6, 2, 0, 4, 3, 5, 8, 7, 9],
    //     [0, 2, 3, 4, 5, 6, 7, 8, 9]
    // )

    console.log(result)
}

export default run
