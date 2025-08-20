class HashTable {
    constructor(size = 10) {
        this.table = [];
        this.size = size;
        this.count = 0
    }
    display() {
        console.log(this.table)
    }

    loadFactor() {
        return this.count / this.size
    }

    reSizing() {
        let oldData = this.table;
        this.size *= this.size;
        this.table = new Array(this.size);
        for (let entry of oldData) {
            if (entry && entry[0] !== "<Deleted>") {
                this.set(entry[0], entry[1])
            }
        }
    }

    hash(key) {
        let total = 0
        for (let val of key) {
            total += val.charCodeAt(0)
        }
        return total
    }
    h1(key) {
        return this.hash(key) % this.size
    }
    h2(key) {
        return 5 - (this.hash(key) % 5)
    }
    set(key, val) {
        let index = this.h1(key)
        let step = this.h2(key)
        let i = 0;
        while (this.table[index + i * step] &&
            this.table[index + i * step][0] !== key
        ) {
            i++
            if (i === this.size) {
                throw new Error("the table is full")
            }
        }

        if (!this.table[index + i * step]) this.count++
        this.table[index + i * step] = [key, val];
        if (this.loadFactor() > 0.7) {
            this.reSizing()
        }

        return true
    }
    get(key) {
        let index = this.h1(key);
        let step = this.h2(key);
        let i = 0;

        while (this.table[index + i * step]) {
            if (this.table[index + i * step][0] === key) {
                return this.table[index + i * step][1];
            }
            i++;
            if (i === this.size) break;
        }
        return undefined;
    }

    remove(key) {
        let index = this.h1(key);
        let step = this.h2(key);
        let i = 0;
        while (this.table[index + i * step]) {
            if (this.table[index + i * step][0] === key) {
                this.table[index + i * step] = ["<Deleted>", null];
                return true
            }
            i++;
            if (i === this.size) break;
        }
        return false
    }
}

const dd = new HashTable();
dd.set("name", "ameen");
dd.set("age", 18);
dd.set("per", "ameen");
dd.set("vayas", 18);
dd.set("peru", "ameen");
dd.set("pryayam", 18);
dd.set("count", 18);
dd.set("lpa", 18);
console.log(dd.get("name"));
console.log(dd.get("age"));

dd.display();
console.log(dd.remove("age"));
console.log(dd.get("age"));
dd.display();