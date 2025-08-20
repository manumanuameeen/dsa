
class Node {
    constructor() {
        this.children = new Map();
        this.isEnd = false
    }
}

class Trie {

    constructor() {
        this.root = new Node();
    }

    insert(word) {

        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char,new Node())
            }
            node = node.children.get(char)
        }
         node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
          
            if (!node.children.has(char)) {
             
                return false;
            }
            node = node.children.get(char);
        }
        
        return node.isEnd 
    }
}

const t = new Trie()
t.insert("ameen");
t.insert("udhay");


console.log(t.search("ameen"));


