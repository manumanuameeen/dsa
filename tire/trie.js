


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
            if(!node.children.has(val)){
                node.children.set(val,new TrieNode() )
            }
            node = node.children.get(val);           
        }



        node.isEnd = true;
     node.meaning= meaning?meaning:null;
    }

    serch(word){
        let node  = this.root;
        for(let val of word){
            if(!node.children.has(val)){
                return false
            }
            node = node.children.get(val);
        }
        return node.isEnd
    }

    startWith(prefix){
        let node = this.root;
        for(let val of prefix){
            if(!node.children.has(val)){
                return false;
            }
            node = node.children.get(val)
        }
        return true;
    }

    autoSuggest(prefix){
        let node = this.root;
        for(let val of prefix){
            if(!node.children.has(val)){
                return [];
            }
            node = node.children.get(val)
        }
        let result = [];
        const dfs =(node, path)=>{
           
            if(node.isEnd === true){
                result.push({word:path,meaning:node.meaning});
            }
            for(let [val,children] of node.children){
                   dfs(children,path+val)
            }
        }
        dfs(node,prefix)
        return result
    }

    getMeaning(word){
        let node = this.root;
        for(let val of word){
            if (!node.children.has(val)) {
                return null;
            }
            node  = node.children.get(val);
        }
       return node.isEnd?node.meaning:null
    }


    display(){
        console.log(this.root)
    }
}
const tr = new Trie();
tr.insert("cat","its a animal can be taimed and we can care in our home");
tr.insert("car","its a vehicle have four wheels");
tr.insert("cart","its a blublublu");
tr.insert("cow","its a animal  get milk from this animal ");
tr.insert("water","this is a liquid we can drink ,it's very healthy for our health ");
console.log(tr.serch("cat"))
console.log(tr.serch("car"))
console.log(tr.serch("cow"))
console.log(tr.startWith("ca"))
 console.log(tr.autoSuggest("car")) 
console.log(tr.getMeaning("cow"))
console.log(tr.getMeaning("car"))
console.log(tr.getMeaning("cat"))
console.log(tr.getMeaning("water"))
// tr.display()



