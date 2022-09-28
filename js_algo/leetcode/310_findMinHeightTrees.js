// https://leetcode.com/problems/minimum-height-trees/

const findMinHeightTrees = (n, edges) => {
    if (n === 1) {
        return [0]
    }
    const graph = {}
    /*
        Maximum MHT is only 2, cuz we don't want paht between 2 leaves (max height of tree)
        remove all of the leaves until the amount of leaves is < 2
        -> found the MHT
    */

    edges.forEach((each) => {
        const [u, v] = each
        if (!graph[u]) {
            graph[u] = [v]
        } else {
            graph[u].push(v)
        }

        if (!graph[v]) {
            graph[v] = [u]
        } else {
            graph[v].push(u)
        }
    })

    // collecting leaves
    let leaves = Object.keys(graph).filter((each) => graph[each].length === 1)
    leaves = leaves.map((item) => parseInt(item, 10))

    let i = n
    while (i > 2) {
        i -= leaves.length
        const newLeaves = new Set()
        leaves.forEach((leave) => {
            const neighbor = graph[leave].pop()

            graph[neighbor] = graph[neighbor].filter((each) => each !== leave)

            if (graph[neighbor].length === 1) {
                newLeaves.add(neighbor)
            }
        })

        leaves = []
        newLeaves.forEach((item) => {
            leaves.push(item)
        })
    }

    return leaves
}

const run = () => {
    // const result = findMinHeightTrees(6, [
    //     [0, 1],
    //     [0, 2],
    //     [0, 3],
    //     [3, 4],
    //     [4, 5]
    // ]) // [3]
    const result = findMinHeightTrees(6, [
        [3, 0],
        [3, 1],
        [3, 2],
        [3, 4],
        [5, 4]
    ]) // [3,4]
    // const result = findMinHeightTrees(4, [
    //     [1, 0],
    //     [1, 2],
    //     [1, 3]
    // ]) // [1]
    // const result = findMinHeightTrees(7, [
    //     [0, 1],
    //     [1, 2],
    //     [1, 3],
    //     [2, 4],
    //     [3, 5],
    //     [4, 6]
    // ]) // [1, 2]

    console.log(result)
}

export default run
