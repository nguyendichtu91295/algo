class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        return this.traverse(value)
    }

    traverse(value, currentNode = this.root) {
        if (currentNode === null) {
            // empty BST
            this.root = new Node(value);
            return this;
        }

        if (value === currentNode.value) {
            return this;
        }

        if (value < currentNode.value) {
            if (currentNode.left !== null) {
                this.traverse(value, currentNode.left)
            } else {
                currentNode.left = new Node(value);
                return this;
            }
        }

        if (value > currentNode.value) {
            if (currentNode.right !== null) {
                this.traverse(value, currentNode.right)
            } else {
                currentNode.right = new Node(value);
                return this;
            }
        }
    }

    bfs() {
        if (!this.root) {
            return [];
        }
        const queue = [this.root];
        const visited = [];

        while (queue.length) {
            let item = queue.pop();

            if (item.left) {
                queue.unshift(item.left)
            }

            if (item.right) {
                queue.unshift(item.right)
            }

            visited.push(item)
        }

        return visited;
    }

    dfsPreOrder() {
        if (!this.root) {
            return [];
        }

        const visited = [];

        const recursive = (node) => {
            visited.push(node);
            if (node.left) {
                recursive(node.left)
            }

            if (node.right) {
                recursive(node.right)
            }

            return visited;
        }

        return recursive(this.root)
    }

    dfsPostOrder() {
        if (!this.root) {
            return [];
        }

        const visited = [];

        const recursive = (node) => {
            if (node.left) {
                recursive(node.left)
            }

            if (node.right) {
                recursive(node.right)
            }

            visited.push(node);

            return visited;
        }

        return recursive(this.root)
    }

    dfsInOrder() {
        if (!this.root) {
            return [];
        }

        
        const visited = [];

        const recursive = (node) => {
            if (node.left) {
                recursive(node.left)
            }

            visited.push(node);

            if (node.right) {
                recursive(node.right)
            }

            return visited;
        }

        return recursive(this.root)
    }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(15);
bst.insert(8);
bst.insert(20);
bst.dfsInOrder();