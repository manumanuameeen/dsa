
class Node {
    constructor(val) {
        this.value = val;
        this.rigth = this.left = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else if (newNode.value > root.value) {
            if (root.rigth === null) {
                root.rigth = newNode
            } else {
                this.insertNode(root.rigth, newNode)
            }

        }
    }

    isEmpty() {
        return this.root === null;
    }



    // search(root , target){
    //     if (!root) {
    //         return false;
    //     } else {
    //         if (root.value === target){
    //             return true;
    //         } else if (target < root.value){
    //            return  this.search(root.left, target);
    //         } else {
    //            return this.search(root.rigth, target);
    //         }
    //     }
    // }
    search(root, target) {
        if (root) {
            return false;
        } else {
            if (target === root.value) {
                return true
            }
            else if (target < root.value) {
                return this.search(root.left, target);
            } else {
                return this.search(root.rigth, target)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.rigth)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.rigth)
            console.log(root.value)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.rigth)
        }
    }

    sortArr(root, arr = []) {
        if (root) {
            this.sortArr(root.left, arr);
            arr.push(root.value);
            this.sortArr(root.rigth, arr);
        }
        return arr;
    }

    higth(root) {
        if (!root) return 0
        return 1 + Math.max(this.higth(root.left), this.higth(root.rigth))

    }

}


const bst = new BST();

bst.insert(6)
bst.insert(4)
bst.insert(9)
bst.insert(8)
bst.insert(3)
bst.insert(2)


// console.log(bst.search(bst.root, 111))
// bst.preOrder(bst.root)
bst.postOrder(bst.root)
// bst.inOrder(bst.root)
// bst.display()
console.log(bst.sortArr(bst.root))
console.log(bst.higth(bst.root))