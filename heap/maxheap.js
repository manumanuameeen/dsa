
class MaxHeap {
    constructor() {
        this.heap = []
    }
    lCHild(i) {
        return i * 2 + 1
    }
    rlCHild(i) {
        return i * 2 + 2
    }
    parent(i) {
        return Math.floor((i - 1) / 2)
    }
    swap(i, j) {
        return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    };

    insert(val) {
        this.heap.push(val);
        this.heapify(this.heap.length - 1)
    }

    heapify(i) {
        let index = i;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            };
        };
    };



    delete() {

        if (this.heap.length <= 0) {
            return null;
        } 
        const maxvalue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return maxvalue;

    }


    heapifyDown(i = 0) {
        let length = this.heap.length
        let largest = i;
        let left = this.lCHild(i)
        let rigth = this.rlCHild(i)

        if (left < length && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if (rigth < length && this.heap[rigth] > this.heap[largest]) {
            largest = rigth
        }

        if (largest !== i) {
            this.swap(largest, i);
            this.heapifyDown(largest)
        }

    }

    display() {
        console.log(this.heap);
    }


    
    
}
function arrTomax(arr){
    let heap =  new MaxHeap()
    for(let val of arr){
        heap.insert(val)
    }
    return heap.heap
}
    let h =  new MaxHeap()
console.log(arrTomax([5,2,6,8,3,9]))
h.insert(2)
h.insert(5)
h.insert(89)

h.insert(6)
h.insert(63)
h.insert(3)


h.display()
// console.log(h.delete())
// h.display()