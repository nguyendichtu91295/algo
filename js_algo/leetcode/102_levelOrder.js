// https://leetcode.com/problems/binary-tree-level-order-traversal/
import TreeNode from '/utils/treeNode'
import MyQueue from '/utils/queue'

const levelOrder = (root) => {
    const result = []
    const queue = new MyQueue()
    queue.enqueue(root)

    while (queue.length()) {
        const levelLength = queue.length()
        let i = 0

        const levelArray = []
        while (i < levelLength) {
            const item = queue.dequeue()

            if (item) {
                levelArray.push(item.val)
                queue.enqueue(item.left)
                queue.enqueue(item.right)
            }

            i++
        }

        if (levelArray.length) {
            result.push(levelArray)
        }
    }

    return result
}

const run = () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(2)

    root.left.left = new TreeNode(0)
    root.left.right = new TreeNode(4)
    root.left.right.left = new TreeNode(3)
    root.left.right.right = new TreeNode(5)

    root.right = new TreeNode(8)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(9)

    const result = levelOrder(root)

    console.log(result)
}

export default run
