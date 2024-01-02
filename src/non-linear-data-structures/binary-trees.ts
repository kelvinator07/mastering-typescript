export default class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    private insertNode(root: TreeNode | null, value: number): TreeNode {
        if (root === null) {
            return new TreeNode(value);
        }

        if (Math.random() < 0.5) {
            root.left = this.insertNode(root.left, value);
        } else {
            root.right = this.insertNode(root.right, value);
        }

        return root;
    }

    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    inOrderTraversal(): number[] {
        const result: number[] = [];
        this.inOrderTraversalNode(this.root, result);
        return result;
    }

    private inOrderTraversalNode(root: TreeNode | null, result: number[]): void {
        if (root) {
            this.inOrderTraversalNode(root.left, result);
            result.push(root.value)
            this.inOrderTraversalNode(root.right, result);
        }
    }
}

// Example :
const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(9);
binaryTree.insert(2);

console.log("In-order Traversal:", binaryTree.inOrderTraversal());
