
//pending task



//add sorted array from this
//find the hight  
//do the pending work
//do the pending work formthe chat gpt given
// ---------------------->
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
    inOrder(arr = [], node = this.root) {
        if (node) {
            this.inOrder(arr, node.left)
            arr.push(node.data);
            this.inOrder(arr, node.rigth)
        }
        return arr
    }


    hight(root = this.root) {
        if (!root) {
            return 0
        }
        return 1 + Math.max(this.hight(root.left), this.hight(root.rigth))
    }

    largest(root=this.root) {
        if (!root) return null;
        if (!root.rigth) return root.data
        return this.largest(root.rigth)
    }

    secLargesy(node = this.root,parent = null){
        if(!node)return null;

        if(!node.rigth){
            if(node.left){
               return  this.sechelper(node.left)
            }
            return parent?parent.data:null;
        }
        return this.secLargesy(node.rigth,node)
    }
    sechelper(node){
        if(!node.rigth)return node.data
        return this.sechelper(node.rigth)
    }
}


const bst = new BST()
const arr = [1, 5, 8, 4, 2, 6];
let result = [];
for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
}

console.log(bst.inOrder())
console.log(bst.hight())
console.log(bst.largest())
console.log(bst.secLargesy())
// bst.insert(5)
// bst.insert(7)
// bst.insert(2)
// bst.preOrder()
// console.log(bst.serach(2))
