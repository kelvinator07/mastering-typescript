import TreeNode from './binary-trees';

class BinarySeachTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    private insertNode(root: TreeNode, newNode: TreeNode): void {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    search(value: number) : boolean {
        return this.searchNode(this.root, value)
    }

    searchNode(root: TreeNode | null, value: number): boolean {
        if (!root) {
            return false;
        }

        if (value === root.value) {
            return true;
        } else if (value < root.value) {
            return this.searchNode(root.left, value);
        } else {
            return this.searchNode(root.right, value);
        }
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
const binarySeachTree = new BinarySeachTree();

binarySeachTree.insert(10);
binarySeachTree.insert(5);
binarySeachTree.insert(15);
binarySeachTree.insert(3);
binarySeachTree.insert(7);
binarySeachTree.insert(12);
binarySeachTree.insert(18);

console.log(binarySeachTree.search(7)); // Output true
console.log(binarySeachTree.search(9)); // Output false

console.log("In-order Traversal:", binarySeachTree.inOrderTraversal()); // Output: [3, 5, 7, 10, 12, 15, 18]
