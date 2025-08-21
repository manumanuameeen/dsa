

class maxHeap {
    constructor() {
        this.item = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    getleftChild(i) {
        return 2 * i + 1;
    }
    getrightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.item[i], this.item[j]] = [this.item[j], this.item[i]];
    }

    insert(val) {
        this.item.push(val);
        this.heapifyUp();
    }

    heapifyUp(i = this.item.length - 1) {

        let index = i
        while (index > 0) {
            let parent = this.getParent(index)
            if (this.item[parent] < this.item[index]) {
                this.swap(parent, index)
                index = parent;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.item.length === 0) {
            return null;
        }
        if (this.item.length === 1) {
            return this.item.pop();
        }
        let max = this.item[0];
        this.item[0] = this.item.pop();
        this.heapifyDown()
        return max
    }

    heapifyDown() {
        let index = 0
        while (index < this.item.length) {
            let left = this.getleftChild(index)
            let right = this.getrightChild(index)
            let largest = index;
            if (left < this.item.length && this.item[left] > this.item[largest]) {
                largest = left;
            }
            if(right<this.item.length&&this.item[right]>this.item[largest]){
                largest = right;
            }
            if(index !==largest){
                this.swap(largest,index);
                index = largest
            }else{
                break;
            }
        }
    }
    display() {
        console.log(this.item.join("-"))
    }

}
const mh = new maxHeap()
mh.insert(1)
mh.insert(2)
mh.insert(3)
mh.insert(4)
mh.insert(5)
mh.insert(50)

console.log("max:",mh.extractMax());
mh.display()