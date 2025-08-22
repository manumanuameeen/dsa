class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let val of key) {
            total += val.charCodeAt();
        }
        return total % this.size;
    }

    set(key, val) {
        let index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = []
        }

        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1] = val;
                return
            }
        }

        this.table[index].push([key,val])
    }


    get(key){
        let index = this.hash(key);
        if(!this.table[index]){
            return undefined;
        }
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1];
            }
        }
        return undefined
    }


    remove(key){
        let index = this.hash(key);

        if(!this.table[index])return undefined;

       this.table[index] = this.table[index].filter((pair)=>pair[0]!==key)
    }
}


const sc = new HashTable();

sc.set("name","ameen");
sc.set("name","savad");
sc.set("age",18);
sc.set("place","pmna");
console.log(sc.get("name"));
console.log(sc.get("age"));
sc.remove("age")
console.log(sc.get("age"));
