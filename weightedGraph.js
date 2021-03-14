/*
    left item: 2n + 1
    rigth item: 2n + 2

    find parent: Floor((n - 1) / 2)
*/ 


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex] || !vertex) {
            return this.adjacencyList;
        }

        this.adjacencyList[vertex] = [];
    }

    addEdge(vertexA, vertexB, weight) {
        if (!this.adjacencyList[vertexB] || !this.adjacencyList[vertexA] || !vertexA || !vertexB) {
            return this.adjacencyList;
        }

        const isVertexAExistInVertexB = !!(this.adjacencyList[vertexB].filter(item => item == vertexA).length)
        const isVertexBExistInVertexA = !!(this.adjacencyList[vertexA].filter(item => item == vertexB).length)

        if (isVertexAExistInVertexB || isVertexBExistInVertexA) {
            return this.adjacencyList
        }

        this.adjacencyList[vertexA].push(new Node(vertexB, weight))
        this.adjacencyList[vertexB].push(new Node(vertexA, weight))

        return this.adjacencyList;
    }

    // traverseDFS(entry) {
    //     if (!entry || !this.adjacencyList[entry]) {
    //         return [];
    //     }

    //     const visitedVertex = {};
    //     const result = []

    //     const helper = (node) => {
    //         visitedVertex[node] = 1;
    //         result.push(node)

    //         if (this.adjacencyList[node].length == 0) {
    //             return;
    //         }

    //         this.adjacencyList[node].forEach(eachNode => {
    //             if (!visitedVertex[eachNode]) {
    //                 helper(eachNode);
    //             }
    //         });
    //     }
        
    //     helper(entry);
    //     return result;
    // }

    // traverseDFSInterative(entry) {
    //     if (!entry || !this.adjacencyList[entry]) {
    //         return [];
    //     }

    //     // A C E F D B
    //     const result = [];
    //     const visisted = {};
    //     const visitingList = [];
    //     let current = null;

    //     visitingList.push(entry);
    //     visisted[entry] = true;

    //     while (visitingList.length) {
    //         current = visitingList.pop();
               
    //         result.push(current);

    //         this.adjacencyList[current].forEach(item => {
    //             if (!visisted[item]) {
    //                 visisted[item] = true;
    //                 visitingList.push(item);   
    //             }
    //         })
    //     }

    //     return result;
    // }

    // traverseBFSInterative(entry) {
    //     if (!entry || !this.adjacencyList[entry]) {
    //         return [];
    //     }

    //     // A B C D E F
    //     const result = [];
    //     const visisted = {};
    //     const visitingList = [];
    //     let current = null;

    //     visitingList.push(entry);
    //     visisted[entry] = true;

    //     while (visitingList.length) {
    //         current = visitingList.shift();
               
    //         result.push(current);

    //         this.adjacencyList[current].forEach(item => {
    //             if (!visisted[item]) {
    //                 visisted[item] = true;
    //                 visitingList.push(item);   
    //             }
    //         })
    //     }

    //     return result;
    // }

    dijkstra(entry, endpoint) {
        if (entry == undefined || endpoint == undefined) {
            return []
        }

        //#region - variables
        const priorityQueue = new PriorityQueue()
        const result = {}
        //#endregion - variables

        //#region - load distance
        Object.keys(this.adjacencyList).forEach(key => {

            if (key == entry) {
                priorityQueue.queue({
                    key,
                    value: 0
                })
            } else {
                priorityQueue.queue({
                    key,
                    value: Infinity
                })
            }
        })

        console.log(priorityQueue)
        //#endregion - load distance

        //#region - recursive helper
        const helper = () => {

        }

        helper();
        return result;
        //#endregion - recursive helper
    }
}

class PriorityQueue {
    // MIN HEAP
    constructor() {
        this.list = [];
    }

    queue(node) {
        if (node === undefined) {
            return this.list;
        }

        this.list.push(node);
        let position = this.list.length - 1;
        let parent = -1;

        const bubbleUp = () => {
            parent = Math.floor((position - 1) / 2);

            if (parent < 0) {
                return this.list;
            }
           
            if (this.list[position].value < this.list[parent].value) {
                // swap
                let temp = this.list[position];
                this.list[position] = this.list[parent];
                this.list[parent] = temp;
                position = parent;
                return bubbleUp();
            }

            return this.list;
        }

        return bubbleUp()
    }

    dequeue() {
        const removedElement = this.list.shift();

        if (this.list.length <= 1) {
            return removedElement;
        }

        const lastItem = this.list.pop()
        this.list.unshift(lastItem);
        let position = 0;

        const bubbleDown = () => {
            let left = 2 * position + 1;
            let right = 2 * position + 2;
            let max;
            if (left >= this.list.length) {
                return removedElement;
            }

            if (right >= this.list.length) {
                max = left;
            } else if (this.list[left].value < this.list[right].value) {
               max = left;
            } else {
                max = right;
            }

            if (this.list[position].value > this.list[max].value) {
                let temp = this.list[position];
                this.list[position] = this.list[max];
                this.list[max] = temp;
                position = max;
                return bubbleDown();
            }

            return removedElement();
        }

        return bubbleDown();
    }
}

var graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4)
graph.addEdge("A","C", 2)
graph.addEdge("C","D", 2)
graph.addEdge("C","F", 4)
graph.addEdge("B","E", 3)
graph.addEdge("D","E", 3)
graph.addEdge("D","F", 1)
graph.addEdge("F","E", 1)

graph.dijkstra("A", "E")
// graph.traverseBFSInterative("A")

