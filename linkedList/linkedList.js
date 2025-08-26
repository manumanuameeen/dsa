class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LINKEDLIST {
    constructor() {
        this.head = null;
    }

    insertFirst(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode
        return
    }

    insertEnd(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode;
            return
        }
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        curr.next = newNode
    }


    insertAtPosition(val, pos) {
        let newNode = new Node(val);
        if (pos < 1) {
            console.log("not valid")
            return -1
        }

        if (pos === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }


        let curr = this.head;
        let prev = null;
        let count = 1;
        while (curr && count < pos) {
            prev = curr
            curr = curr.next;
            count++;
        }

        if (count !== pos) {
            console.log("the size is not valid")
            return -1;
        } else {
            prev.next = newNode;
            newNode.next = curr;
            return true;
        }
    }

    display() {
        let curr = this.head;
        let result = ""
        while (curr) {
            result += curr.data + "->"
            curr = curr.next
        }
        console.log(result + null)
    };

    deleteAtBeg() {
        if (!this.head) {
            console.log("cant delete no head")
            return -1
        }
        this.head = this.head.next;
    }

    deleteAtEnd() {

        if (!this.head) {
            console.log("cant delete no head");
            return -1
        }

        let curr = this.head;
        while (curr.next.next) {
            // console.log(curr.data)
            curr = curr.next
        }

        curr.next = null

    }

    deleteAtPos(pos) {
        if (!this.head) {
            console.log("cant delete no head");
            return -1
        }

        let curr = this.head;
        let prev = null;
        let count = 1;

        while (curr && count < pos) {
            prev = curr;
            curr = curr.next;
            count++
        }

        if (count !== pos) {
            console.log("invalid point")
            return -1;
        };

        prev.next = curr.next;
    }


    deletebyVal(val) {
        if (!this.head) return -1;

        let curr = this.head;
        let prev = null;
        while (curr && curr.data !== val) {
            prev = curr;
            curr = curr.next;
        }

        if (curr) {
            prev.next = curr.next
        } else {
            return -1
        }
    }

    findMiddle() {

        let slow = this.head;
        let fast = this.head;

        while (fast) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.data)
    }


    SearchvalIndex(val) {

        if (!this.head) return -1;
        let curr = this.head;
        let index = 0;
        while (curr ) {
            if(curr.data === val){
                return index
            }
            curr = curr.next;
            index++;
        }
        // console.log(index)
        return -1
    }

    updateVal(val,newVal){
        if(!this.head)return -1;

        let curr = this.head;
        while(curr){
            if(curr.data === val){
                curr.data = newVal
                console.log("value updated to new val")
                return true;
            }
            curr = curr.next;
        }
        console.log("can't find the value")
        return -1
    }

    reverse(){
        if(!this.head)return -1;

        let curr = this.head;
        let prev = null;
        let next = null;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
this.head = prev
        
    }

}
const ll = new LINKEDLIST()
ll.insertEnd(3)
ll.insertEnd(4)
ll.insertEnd(5)
ll.insertEnd(6)
ll.insertEnd(7)
ll.insertAtPosition(10, 4)
// ll.deleteAtBeg()
// ll.deleteAtEnd()
// ll.deleteAtPos(3)
// ll.deletebyVal(10)
// ll.display()
// console.log("_______>")
// ll.findMiddle()
// console.log(ll.SearchvalIndex(10))
console.log(ll.updateVal(10,111));
ll.reverse()
ll.display()
ll.reverse()
ll.display()