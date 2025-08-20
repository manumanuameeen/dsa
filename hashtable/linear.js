class HashTable {
    constructor(size = 10) {
        this.table = [];
        this.size = size;
        this.count = 0
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
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
        this.table[index] = [key, val];
        this.count++
    }

    get(key) {
        let index = this.hash(key);
        let started = index;
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (started === index) break;
        }
        return null
    }

    remove(key) {
        let index = this.hash(key);
        let started = index;
        while (this.table[index]) {
            if (this.table[index][0] == key) {
                this.table[index] = ["<Deleted>", null];
                return true
            }
            index = (index+1)%this.size;
            if(index === started)break;
        }
        return false;
    }
}

const lp = new HashTable();

lp.set("name", "ameen");
lp.set("age", 18);


console.log(lp.get("name"))
console.log(lp.get("age"))


console.log(lp.remove("age"))
console.log(lp.get("age"))
