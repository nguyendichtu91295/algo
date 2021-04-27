// https://leetcode.com/problems/merge-two-binary-trees/
class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val
    }

    
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
}

function mergeTwoNode(node1, node2) {
    let value1 = 0;
    let value2 = 0
    if (node1 && node1.val) {
        value1 = node1.val
    }

    if (node2 && node2.val) {
        value2 = node2.val
    }
    return new Node(value1 + value2);
}

function mergeTwoTree(root1, root2) {
    // DFS
    // return a new tree
    const resultTree = new BinaryTree();

    const helper = (current1, current2) => {
        let current = null;

        if (!current1 && !current2) {
            return null;
        }

        if (current1 == root1 && current2 == root2) {
            resultTree.root = mergeTwoNode(current1, current2)
            current = resultTree.root;
        } else {
            current = mergeTwoNode(current1, current2)
        }
        
        current.left = helper(current1 && current1.left, current2 && current2.left);
        current.right = helper(current1 && current1.right, current2 && current2.right);
        
        return current;
    }

    return helper(root1, root2);
}

let treeA = new BinaryTree()
let treeB = new BinaryTree()

treeA.root = new Node(1)
treeA.root.left = new Node(3)
treeA.root.right = new Node(2)
treeA.root.left.left = new Node(5)

treeB.root = new Node(2)
treeB.root.left = new Node(1)
treeB.root.right = new Node(3)

treeB.root.left.right = new Node(4)
treeB.root.right.right = new Node(7)

mergeTwoTree(treeA.root, treeB.root)