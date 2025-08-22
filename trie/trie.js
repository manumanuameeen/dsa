


class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
        this.meaning = null;
    }
}

class Trie {

    constructor() {
        this.root = new TrieNode();
    }

  


    insert(word,meaning){
        let node = this.root;
        for(let val of word){
            if(!node.children.has(val)){
            node.children.set(val,new TrieNode());
            }
            node = node.children.get(val);
        }

        node.isEnd = true;
        if(meaning){
            node.meaning = meaning
        }else{
            node.meaning = null;
        }
    }


    serch(word){
        let node = this.root;
        for(let char of word){
            if(!node.children.has(char)){
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEnd
    }

  
startWith(prefix){
    let node = this.root;
    for(let char of prefix){
        if(!node.children.has(char)){
            return false;
        }
        node = node.children.get(char);
    }

    return true;
}

    // autoSuggest(prefix) {
    //     let node = this.root;
    //     for (let val of prefix) {
    //         if (!node.children.has(val)) {
    //             return [];
    //         }
    //         node = node.children.get(val)
    //     }
    //     let result = [];
    //     const dfs = (node, path) => {

    //         if (node.isEnd === true) {
    //             result.push({ word: path, meaning: node.meaning });
    //         }
    //         for (let [val, children] of node.children) {
    //             dfs(children, path + val)
    //         }
    //     }
    //     dfs(node, prefix)
    //     return result
    // }


    autoSuggest(prefix){
        let node =  this.root;
        for(let char of prefix){
            if(!node.children.has(char)){
                return [];
            }
            node = node.children.get(char);
        }
        
        let result = [];
        const dfs =(node,path)=>{
            if(node.isEnd){
                result.push({word:path,meaning:node.meaning});
            }
            for(let [key,children] of node.children){
                dfs(children,path+key)
            }
        }
        dfs(node,prefix);
        return result
    }
    getMeaning(word) {
        let node = this.root;
        for (let val of word) {
            if (!node.children.has(val)) {
                return null;
            }
            node = node.children.get(val);
        }
        return node.isEnd ? node.meaning : null
    }

    
         delleteWord  (word, node = this.root, depth = 0)  {
          
            if (!node) return false;
            if (depth === word.length) {
                
                if (!node.isEnd) return false;
                node.isEnd = false
                return node.children.size === 0
            }
            let char = word[depth];
            if (!node.children.has(char)) return false
        
            const shouldbeDelete = this.delleteWord(word, node.children.get(char), depth + 1);
            if (shouldbeDelete) {
                
                node.children.delete(char)
                return node.children.size === 0 && !node.isEnd 
            }
            return false
        }
    

    display() {
        console.log(this.root)
    }
}
const tr = new Trie();
tr.insert("cat", "its a animal can be taimed and we can care in our home");
tr.insert("car", "its a vehicle have four wheels");
tr.insert("cart", "its a blublublu");
tr.insert("cow", "its a animal  get milk from this animal ");
tr.insert("water", "this is a liquid we can drink ,it's very healthy for our health ");
// console.log(tr.serch("car"))
// console.log(tr.serch("cow"))
// console.log(tr.startWith("ca"))
console.log(tr.autoSuggest("car"))
console.log(tr.autoSuggest("w"))
// console.log(tr.getMeaning("cow"))
// console.log(tr.getMeaning("car"))
// console.log(tr.getMeaning("cat"))
// console.log(tr.getMeaning("water"))

tr.delleteWord("cat")
// console.log(tr.serch("cat"))

// tr.display()



