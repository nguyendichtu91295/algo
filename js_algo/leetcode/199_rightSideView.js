// https://leetcode.com/problems/binary-tree-right-side-view/

import MyQueue from '/utils/queue'
import TreeNode from '/utils/treeNode'

const rightSideView = (root) => {
    const queue = new MyQueue()

    queue.enqueue(root)
    const result = []

    while (queue.length()) {
        const levelLength = queue.length()
        let i = 0
        while (i < levelLength) {
            const item = queue.dequeue()

            if (item) {
                if (i === levelLength - 1) {
                    result.push(item.val)
                }

				if (item.left) {
					queue.enqueue(item.left)
				}

				if (item.right) {
					queue.enqueue(item.right)
				}
            }
            i++
        }
    }

    return result
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

    const result = rightSideView(root)

    console.log(result)
}

export default run
