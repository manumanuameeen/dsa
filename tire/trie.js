
// class Node {
//     constructor() {
//         this.children = new Map();
//         this.isEnd = false
//     }
// }

// class Trie {

//     constructor() {
//         this.root = new Node();
//     }

//     insert(word) {

//         let node = this.root;
//         for (let char of word) {
//             if (!node.children.has(char)) {
//                 node.children.set(char,new Node())
//             }
//             node = node.children.get(char)
//         }
//          node.isEnd = true;
//     }

//     search(word) {
//         let node = this.root;
//         for (let char of word) {
          
//             if (!node.children.has(char)) {
             
//                 return false;
//             }
//             node = node.children.get(char);
//         }
        
//         return node.isEnd 
//     }
// }

// const t = new Trie()
// t.insert("ameen");
// t.insert("udhay");


// console.log(t.search("ameen"));


class TrieNode{
    constructor(){
        this.children = new Map();
        this.isEnd = false;
        this.meaning = null;
    }
}

class Trie{
    
    constructor(){
        this.root = new TrieNode();
    }

    insert(word,meaning){
        let node = this.root;
        for(let val of word){
            if(!node.has(val)){
                node.children.set(val,new TrieNode() )
            }
            node = node.children.get(val);           
        }

        node.isEnd = true;
     node.meaning= meaning?meaning:null;
    }


    display(){
        console.log(this.root)
    }
}
const tr = new Trie();
tr.insert("cat","its a animal can be taimed and we can care cat in our home");
tr.display()



