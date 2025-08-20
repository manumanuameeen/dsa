class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size
    }


    hash(key) {
        let total = 0;
        for (let val of key) {
            total += val.charCodeAt();
        }
        return total%this.size;
    }

    set(key,val){
        let index = this.hash(key);
        this.table[index] = [key,val]
    }

    get(key){
        let index = this.hash(key)
        if(this.table[index]&&this.table[index][0]=== key){
            return this.table[index][1]
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key);
        if(this.table[index]&&this.table[index][0] === key){
            this.table[index] = undefined;
            return true
        }
        return false;
    }
}

const ht = new HashTable();

ht.set("name","ameen")
ht.set("age",19);

console.log(ht.get("name"))
console.log(ht.get("age"))

console.log(ht.remove("age"))
console.log(ht.get("age"))