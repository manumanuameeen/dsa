class Stack {
    constructor() {
        this.item = [];
    }

    push(data) {
        this.item.push(data);
    }

    pop() {
        if (!this.isEmpty()) "Stack empty";
        this.item.pop();
    }

    peek() {
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0;
    }
    display() {
        console.log(this.item.join("-"))
    }

    size() {
        return this.item.length;
    }

    reverseSting() {

    }
}

const s = new Stack()
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(4);

// s.display()
// console.log(`the top value:${s.peek()}`);
// console.log(`the size of item is ${s.size()}`)


function parentesis(str) {
    let stack = [];
    let pairs = { ')': '(', '}': '{', ']': '[' };

    for (let val of str) {
        if (val === "(" ||val === "{" || val === "[") {
            stack.push(val)
        } else if (val === ")" ||val === "]" ||val === "}") {
            if (stack.pop() !== pairs[val]) {
                return false;
            }
        }
    }
    return stack.length === 0

}
console.log(parentesis("(sdv[sdvs]31)sfv"))