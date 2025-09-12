class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueu(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeu() {
        let node = this.head;
        if (!node) {
            return "<UnderFlow"
        }
        let popped = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return popped.val;
    }

    peek() {
        return this.head ? this.head.val : null;
    }
    display() {
        let node = this.head;
        while (node){
            console.log(node.val)
            node = node.next
        }
        
    }

}


const q = new Queue()
// q.enqueu(1)
// q.enqueu(2)
// q.enqueu(3)
// q.enqueu(4)
// q.enqueu(5)
// q.enqueu(6)

q.enqueu("A")
q.enqueu("M")
q.enqueu("E")
q.enqueu("E")
q.enqueu("N")
q.enqueu("")

// q.display();
// console.log(q.dequeu())
// console.log(q.peek())


q.display();
function reverseUsingStaxk(){
    let stack = [];
    while(q.head){
        
        stack.push(q.dequeu())
    }
   while(stack.length){
    q.enqueu(stack.pop())
   }
}

reverseUsingStaxk()
console.log("after rversing");

q.display();


function reverseString(){
  let stack = [];
    while(q.head){
        
        stack.push(q.dequeu())
    }
   while(stack.length){
    q.enqueu(stack.pop())
   }
}
