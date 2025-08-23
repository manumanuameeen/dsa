class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.root = null;
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val);

        newNode.next = this.root;
        this.root = newNode;
        this.size++;
    }

    pop() {
        let root = this.root;
        if (!root) return "Underflow";
        let popped = this.root.val
        this.root = this.root.next;
        this.size--;
        return popped;
    }


    peek() {
        return this.root ? this.root.val : null;
    }


    display() {
        let curr = this.root;
        while (curr) {
            console.log(curr.val)
            curr = curr.next;
        }
    }



}


const s = new Stack()
// s.push(5);
// s.push(7);
// s.push(7);
// s.push(9);
// console.log("peek:",s.peek())
// s.display()
// s.pop()
// s.display()
function reverseStr(str) {

    for (let char of str) s.push(char);
    let rev = "";
    while (s.root) {
        rev += s.pop()
        // console.log(rev)
    }
    return rev
}
// console.log(reverseStr("esrever"))

function reverseArr(arr) {
    let darr = [];
    for (let val of arr) s.push(val);
    while (s.root) {
        darr.push(s.pop())
    }
    return darr;
}
// console.log(reverseArr([1,2,3,4,5,6]))