


//add sorted array from this
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.rigth = null;
    }

}
class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this.root = newNode;
            return
        } else {
            this._insert(this.root, newNode)
        }

    }

    _insert(root, newNode) {
        if (root.data > newNode.data) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this._insert(root.left, newNode)
            }
        } else if (root.data < newNode.data) {
            if (root.rigth === null) {
                root.rigth = newNode;
            } else {
                this._insert(root.rigth, newNode);
            }
        }
    }


    serach(target, root = this.root) {
        if (!root) {
            return false;
        } else {

            if (root.data === target) {
                return true;
            } else if (target > root.data) {
                return this.serach(target, root.rigth)
            } else if (target < root.data) {
                return this.serach(target, root.left)
            }
        }
    }


    preOrder(node = this.root) {

        if (node) {
            console.log(node.data);
            this.preOrder(node.left)
            this.preOrder(node.rigth)
        }
    }
    postOrder(node = this.root) {

        if (node) {
            this.preOrder(node.left)
            this.preOrder(node.rigth)
            console.log(node.data);
        }
    }
    inOrder(node = this.root) {

        if (node) {
            this.preOrder(node.left)
            console.log(node.data);
            this.preOrder(node.rigth)
        }
    }
}
const bst = new BST()
bst.insert(5)
bst.insert(7)
bst.insert(2)
bst.preOrder()
console.log(bst.serach(2))
