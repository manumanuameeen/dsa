function binarySearch(arr,high, low, target) {

    let mid = Math.floor((high + low) / 2)

    if (low > high) return -1;

    if (arr[mid] === target) {
         arr[mid] = 0;
         return true
    }
    if (arr[mid] > target) {
        return binarySearch(arr,mid - 1,low, target);
    } else if (arr[mid] < target) {
        return binarySearch(arr,high, mid +1, target);
    }
}
let arr = [1,2,3,4,5,6];

console.log(binarySearch(arr,arr.length-1,0,100))
console.log(arr)