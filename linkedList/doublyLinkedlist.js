class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class Dlinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // let curr = this.head;
        // while(curr){
        //     curr = curr.next;
        // }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode

    }

    addAttheBeg(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
    }

    display() {
        let curr = this.head;
        let result = []
        while (curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        console.log(result.join(" <--> "))
    }

    backWardPrint() {
        let back = this.tail;

        let result = [];
        while (back) {
            result.push(back.data);
            back = back.prev;
        }
        console.log(result.join(" <--> "))

    }

    deleteHead() {
        if (this.head) {
            return -1;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return
        }
        this.head = this.head.next
        this.head.prev = null;

    }
    deleteEnd() {
        if (!this.head) return -1;

        if (this.tail === this.head) {
            this.tail = this.head = null;
            return;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;

    }
    deleteWIthVal(val) {
        if (!this.head) {
            return -1
        }

        let curr= this.head;
        while(curr&&curr.data !==val){
            curr = curr.next;
        }
        if(!curr){
            return -1
        }else if(curr == this.head ){
            return this.deleteHead()
        }else if(curr == this.tail){
            return this.deleteEnd()
        }

        curr.prev.next = curr.next;
        curr.next.prev = curr.prev


    }
    reverseDl(){
        if(!this.head){
            return -1
        }

        let curr = this.head;
        let temp = null
        while(curr){
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev
        }
        if(temp){
            this.head = temp.prev;
        }
    }

}
const dl = new Dlinkedlist();
dl.addAttheBeg(12)
dl.addAttheBeg(14)
dl.addAttheBeg(121)
dl.addAttheBeg(1)
dl.addAttheBeg(18)
dl.addAttheBeg(63)
// dl.backWardPrint()
dl.display()
dl.reverseDl()
dl.display()