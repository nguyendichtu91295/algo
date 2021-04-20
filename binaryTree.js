// leetcode - medium
// find lowest common ancestor

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    insert(node) {
        if (this.root == undefined) {
            this.root = node;
            return this.root;
        }

        // BFS
        const queue = [];
        queue.push(this.root)
        let current = null;

        while (queue.length) {
            current = queue.shift();

            if (current.left == null) {
                current.left = node;
                return this.root;
            } else if (current.right == null) {
                current.right = node
                return this.root;
            } else {
                queue.push(current.left)
                queue.push(current.right)
            }
        }
    }

    lca(nodeA, nodeB) {
        let result;

        if (this.root == undefined) {
            return;
        }

        const helper = (current = this.root) => {
            if (current.value == nodeA || current.value == nodeB) {
                return current;
            }

            const childLeft = helper(current.left);
            const childRight = helper(current.right);

            if (childLeft && childRight) {
                return current;
            }
            
            return childLeft || childRight;
        }   

        result = helper();

        return result
    }
}

binaryTree = new BinaryTree()
binaryTree.insert(new Node (3))
binaryTree.insert(new Node (6))
binaryTree.insert(new Node (8))
binaryTree.insert(new Node (2))
binaryTree.insert(new Node (11))
binaryTree.insert(new Node (13))
binaryTree.insert(new Node (20))