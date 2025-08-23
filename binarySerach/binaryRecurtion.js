function binarySearch(arr,high, low, target) {
    let mid = Math.floor((high + low) / 2)
   

    if (low > high) return -1;

    if (arr[mid].id === target) {
 
         return arr[mid].name
    }
    if (arr[mid].id > target) {
        return binarySearch(arr,mid - 1,low, target);
    } else if (arr[mid].id < target) {
        return binarySearch(arr,high, mid +1, target);
    }
}
let arr = [
  { id: 1, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 5, name: "Charlie" }
];


console.log(binarySearch(arr,arr.length-1,0,3))
// console.log(arr[])