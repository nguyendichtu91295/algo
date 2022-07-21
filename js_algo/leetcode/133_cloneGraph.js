// https://leetcode.com/problems/clone-graph/
import MyQueue from '/utils/queue'
import Node from '/utils/GraphNode'

const cloneGraph = (node) => {
    const queue = new MyQueue()
    queue.enqueue(node)
    const allNodes = {}
    const visited = {}

    // run until queue is empty
    while (queue.length()) {
        const current = queue.dequeue()
        if (!current || visited[current.val]) {
            continue
        }

        let newNode = null

        if (allNodes[current.val]) {
            newNode = allNodes[current.val]
        } else {
            newNode = new Node(current.val)
            allNodes[newNode.val] = newNode
        }

        if (!newNode.neighbors) {
            newNode.neighbors = []
        }

        if (current.neighbors) {
            current.neighbors.forEach((item) => {
                queue.enqueue(item)
                let subNode = null

                if (allNodes[item.val]) {
                    subNode = allNodes[item.val]
                } else {
                    subNode = new Node(item.val)
                    allNodes[subNode.val] = subNode
                }

                newNode.neighbors.push(subNode)
            })
        }

        visited[current.val] = 1
    }

    return allNodes[1]
}

const run = () => {
	// const first = new Node(1)
    // const result = cloneGraph(first)

    // const first = new Node(1)
    // const second = new Node(2)
    // const third = new Node(3)
    // const fourth = new Node(4)
    // first.neighbors = [second, fourth]
    // second.neighbors = [first, third]
    // third.neighbors = [second, fourth]
    // fourth.neighbors = [first, third]
    // const result = cloneGraph(first)

    const result = cloneGraph(null)

    console.log(result)
}

export default run
