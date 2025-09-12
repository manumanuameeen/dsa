// class HashTable {
//     constructor(size = 10) {
//         this.table = [];
//         this.size = size;
//         this.count = 0
//     }
//     display() {
//         console.log(this.table)
//     }

//     loadFactor() {
//         return this.count / this.size
//     }

//     reSizing() {
//         let oldData = this.table;
//         this.size *= this.size;
//         this.table = new Array(this.size);
//         for (let entry of oldData) {
//             if (entry && entry[0] !== "<Deleted>") {
//                 this.set(entry[0], entry[1])
//             }
//         }
//     }

//     hash(key) {
//         let total = 0
//         for (let val of key) {
//             total += val.charCodeAt(0)
//         }
//         return total% this.size
//     }
//     h1(key) {
//         return this.hash(key) 
//     }
//     h2(key) {
//         return 5 - (this.hash(key) % 5)
//     }


//     set(key, val) {
//         let index = this.h1(key);
//         let step = this.h2(key);
//         let i = 0;
//         while (this.table[(index + i * step) % this.size]) {
//             if (this.table[(index + i * step)][0] == key) {
//                 this.table[(index + i * step)][1] == val
//             }
//             i++;
//             if (this.size === i) break;
//         }

//         this.table[(index + i * step)] = [key, val];
//         this.count++;

//         if (this.loadFactor() > 0.7) {
//             this.reSizing();
//         }
//         return true;
//     }


//     get(key) {
//         let index = this.h1(key)
//         let step = this.h2(key);
//         let i = 0;
//         while (this.table[(index + i * step)]) {
//             if (this.table[(index + i * step)][0] === key) {
//                 return this.table[(index + i * step)][1];
//             }
//             i++;
//             if (this.size === i) break;
//         }
//         return false
//     }
//     remove(key) {
//         let index = this.h1(key);
//         let step = this.h2(key);
//         let i = 0;
//         while (this.table[index + i * step]) {
//             if (this.table[index + i * step][0] === key) {
//                 this.table[index + i * step] = ["<Deleted>", null];
//                 return true
//             }
//             i++;
//             if (i === this.size) break;
//         }
//         return false
//     }
// }

// const dd = new HashTable();
// dd.set("name", "ameen");
// dd.set("age", 18);
// dd.set("per", "ameen")
// dd.set("per", "sooperman");
// dd.set("vayas", 18);
// dd.set("peru", "ameen");
// dd.set("pryayam", 18);
// dd.set("count", 18);
// dd.set("lpa", 18);
// dd.set("cr", "15.5 Million");
// console.log(dd.get("name"));
// console.log(dd.get("age"));

// dd.display();
// console.log(dd.remove("age"));
// console.log(dd.get("age"));
// dd.display();



class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }
    hash1(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt();

        }
        return total % this.size
    }

    hash2(key) {
        return 5 - (this.hash1(key) % 5)
    }

    set(key, val) {




        let index = this.hash1(key);
        let steps = this.hash2(key);
        let i = 0;
        while (i < this.size) {
            let probeIndex = (index + i * steps) % this.size;

            if (!this.table[probeIndex]) {
                this.table[probeIndex] = [key, val]
                return ;
            }
            if (this.table[probeIndex][0] === key) {
                this.table[probeIndex][1] = val;
                return;
            }
            i++;
        }
        console.log("hashTable is full")

    }
    get(key) {
        let index = this.hash1(key)
        let step = this.hash2(key);
        let i = 0
        while (i < this.size) {
            let probeIndex = (index + i * step)%this.size;
            if (!this.table[probeIndex]) {
                return null
            }
            if(this.table[probeIndex][0] === key){
                return this.table[probeIndex][1];
            }
            i++;
        }
        return null;
    }

    remove(key){
    let index = this.hash1(key)
        let step = this.hash2(key);
        let i = 0
        while(i < this.size){
            let probeIndex = (index+ i * step)%this.size;
            if(!this.table[probeIndex]){
                return null
            }

            if(this.table[probeIndex][0] == key){
                this.table[probeIndex] = ["<Deleted>",null];
                return true ;
            }
            i++
        }
return null;
    }

    display(){
        console.log(this.table)
    }
}

const dd = new HashTable();
dd.set("name", "ameen");
dd.set("age", 18);
dd.set("per", "ameen")
dd.set("per", "sooperman");
dd.set("vayas", 18);
dd.set("peru", "ameen");
dd.set("pryayam", 18);
dd.set("count", 18);
dd.set("lpa", 18);
dd.set("cr", "15.5 Million");
dd.set("car", "pagani");

// console.log(dd.get("name"));
// console.log(dd.get("age"));
// console.log(dd.get("cr"));

dd.display();
console.log(dd.remove("age"));
console.log(dd.get("age"));
// dd.display();
