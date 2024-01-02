class TreeNode {
    value: number;
    height: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}
class AVLTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    height(node: TreeNode | null): number {
        return node ? node.height : 0;
    }

    updateHeight(node: TreeNode): void {
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    balanceFactor(node: TreeNode): number {
        return this.height(node.left) - this.height(node.right);
    }

    leftRotate(y: TreeNode): TreeNode {
        const x = y.right!;
        const T2 = x.left;
    
        x.left = y;
        y.right = T2;
    
        this.updateHeight(y);
        this.updateHeight(x);
    
        return x;
    }
    
    rightRotate(x: TreeNode): TreeNode {
        const y = x.left!;
        const T2 = y.right;
    
        y.right = x;
        x.left = T2;
    
        this.updateHeight(x);
        this.updateHeight(y);
    
        return y;
    }
    
    insert(root: TreeNode | null, value: number): TreeNode {
        if (root === null) {
          return new TreeNode(value);
        }
    
        if (value < root.value) {
          root.left = this.insert(root.left, value);
        } else if (value > root.value) {
          root.right = this.insert(root.right, value);
        } else {
          // Duplicate values are not allowed in this example
          return root;
        }
    
        this.updateHeight(root);
    
        const balance = this.balanceFactor(root);
    
        // Left Heavy
        if (balance > 1) {
          if (value < root.left!.value) {
            return this.rightRotate(root);
          } else {
            root.left = this.leftRotate(root.left!);
            return this.rightRotate(root);
          }
        }
    
        // Right Heavy
        if (balance < -1) {
          if (value > root.right!.value) {
            return this.leftRotate(root);
          } else {
            root.right = this.rightRotate(root.right!);
            return this.leftRotate(root);
          }
        }
    
        return root;
    }
    
    insertValue(value: number): void {
        this.root = this.insert(this.root, value);
    }
      
    inOrderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];
        if (root) {
          result.push(...this.inOrderTraversal(root.left));
          result.push(root.value);
          result.push(...this.inOrderTraversal(root.right));
        }
        return result;
    }
    
    getInOrderTraversal(): number[] {
        return this.inOrderTraversal(this.root);
    }
}

// Example :
const avlTree = new AVLTree();

avlTree.insertValue(10);
avlTree.insertValue(20);
avlTree.insertValue(30);
avlTree.insertValue(40);
avlTree.insertValue(50);
avlTree.insertValue(25);

console.log("In-order Traversal:", avlTree.getInOrderTraversal());
