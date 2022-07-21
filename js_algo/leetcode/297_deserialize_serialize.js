// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

import TreeNode from '/utils/treeNode'

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    const result = []

    const dfs = (node) => {
        if (!node) {
            result.push('N')
            return
        }

        result.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return result.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    const list = data.split(',')
    let i = 0

    const dfs = () => {
        if (list[i] === 'N') {
            return null
        }

        const node = new TreeNode(parseInt(list[i], 10))
        i += 1
        node.left = dfs()
        i += 1
        node.right = dfs()

        return node
    }

    return dfs()
}

const run = () => {
    // const root = new TreeNode(1)
    // root.left = new TreeNode(2)
    // root.right = new TreeNode(3)
    // root.right.left = new TreeNode(4)
    // root.right.right = new TreeNode(5)

    // const root = new TreeNode(1)
    // root.left = new TreeNode(2)
    // root.right = new TreeNode(3)
    // root.left.right = new TreeNode(4)
    // root.right.right = new TreeNode(5)

    const root = null

    let result = serialize(root)
    console.log(result)
    result = deserialize(result)
    console.log(result)
}

export default run
