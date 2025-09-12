// class HashTable {
//     constructor(size = 11) {
//         this.table = [];
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let val of key) {
//             total += val.charCodeAt(0)
//         }
//         return total % this.size;
//     }



//     set(key, val) {
//         let index = this.hash(key)
//         let i = 0

//         while (this.table[(index * i * i) % this.size] && this.table[(index * i * i) % this.size][0] !== key) {
//             i++
//             if (this.size === i) break;
//         }
//         this.table[(index * i * i) % this.size] = [key, val];
//         return true;
//     }


//     get(key) {
//         let index = this.hash(key);
//         let i = 0;
//         while (this.table[(index * i * i) % this.size]) {
//             if (this.table[(index * i * i) % this.size][0] === key) {
//                 return this.table[(index * i * i) % this.size][1];
//             }
//             i++;
//             if (this.size === i) break;
//         }
//         return null;
//     }




//     remove(key){
//         let index = this.hash(key);
//         let i =0 ;
//         while(this.table[(index+i*i)%this.size]){
//             if(this.table[(index+i*i)%this.size][0] === key){
//                 this.table[(index+i*i)%this.size] = ["<Deleted",null];
//                 return true;
//             }
//             i++;
//             if(this.size === i)break;
//         }
//         return false;
//     }
// }



class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt();

        }
        return total % this.size;
    }
    set(key, val) {
        let index = this.hash(key)
        let i = 0;
        while (this.table[index + i * i] % this.size) {
            if (this.table[(index + i * i) % this.size][0] === key) {
                this.table[(index + i * i) % this.size][1] = val
            }
            i++;
            if (i > this.size) throw Error("no more size")
        }

        this.table[(index + i * i) % this.size] = [key, val]
        this.count++;
    }

    // get(key){
    //     let index = this.hash(key)
    //     let i =0 ;

    //     while(this.table[(index+i*i)%this.size]){
    //         if (this.table[(index+i*i)%this.size][0] === key ){
    //             return this.table[(index+i*i)%this.size][1]
    //         }
    //         i++
    //         if(i >this.size)break;
    //     }
    //     return null
    // }

    get(key) {
        let index = this.hash(key)
        let i = 0
        while (i < this.size) {
            let probeIndex = (index + i * i) % this.size;

            if (!this.table[probeIndex]) {
                return null
            }

            if (this.table[probeIndex][0] === key) {
                return this.table[probeIndex][1];
            }
            i++
        }
    }

    remove(key) {
        let index = this.hash(key);
        let i = 0
        while (i < this.size) {
            let probeIndex = (index + i * i) % this.size;

            if (!this.table[probeIndex] ) {
                return null
            }
            if(this.table[probeIndex][0] === key){
                this.table[probeIndex] = ["Deleted" ,null];
                return true;
            }
            i++;
        }

    }
}

    const qd = new HashTable()
qd.set("name", "ameen");
qd.set("age", 18);


console.log(qd.get("name"))
console.log(qd.get("age"))
console.log(qd.remove("age"))
console.log(qd.get("age"))
