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

    addEdge(vertexA, vertexB) {
        if (!this.adjacencyList[vertexB] || !this.adjacencyList[vertexA] || !vertexA || !vertexB) {
            return this.adjacencyList;
        }

        const isVertexAExistInVertexB = !!(this.adjacencyList[vertexB].filter(item => item == vertexA).length)
        const isVertexBExistInVertexA = !!(this.adjacencyList[vertexA].filter(item => item == vertexB).length)

        if (isVertexAExistInVertexB || isVertexBExistInVertexA) {
            return this.adjacencyList
        }

        this.adjacencyList[vertexA].push(vertexB)
        this.adjacencyList[vertexB].push(vertexA)

        return this.adjacencyList;
    }

    removeEdge() {
        // TODO
    }

    removeVertex() {
        // TODO
    }

    traverseDFS(entry) {
        if (!entry || !this.adjacencyList[entry]) {
            return [];
        }

        const visitedVertex = {};
        const result = []

        const helper = (node) => {
            visitedVertex[node] = 1;
            result.push(node)

            if (this.adjacencyList[node].length == 0) {
                return;
            }

            this.adjacencyList[node].forEach(eachNode => {
                if (!visitedVertex[eachNode]) {
                    helper(eachNode);
                }
            });
        }
        
        helper(entry);
        return result;
    }

    traverseDFSInterative(entry) {
        if (!entry || !this.adjacencyList[entry]) {
            return [];
        }

        // A C E F D B
        const result = [];
        const visisted = {};
        const visitingList = [];
        let current = null;

        visitingList.push(entry);
        visisted[entry] = true;

        while (visitingList.length) {
            current = visitingList.pop();
               
            result.push(current);

            this.adjacencyList[current].forEach(item => {
                if (!visisted[item]) {
                    visisted[item] = true;
                    visitingList.push(item);   
                }
            })
        }

        return result;
    }

    traverseBFSInterative(entry) {
        if (!entry || !this.adjacencyList[entry]) {
            return [];
        }

        // A B C D E F
        const result = [];
        const visisted = {};
        const visitingList = [];
        let current = null;

        visitingList.push(entry);
        visisted[entry] = true;

        while (visitingList.length) {
            current = visitingList.shift();
               
            result.push(current);

            this.adjacencyList[current].forEach(item => {
                if (!visisted[item]) {
                    visisted[item] = true;
                    visitingList.push(item);   
                }
            })
        }

        return result;
    }
}


var graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

graph.traverseBFSInterative("A")