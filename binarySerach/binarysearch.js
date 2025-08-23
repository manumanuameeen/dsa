function binarySearch(arr,target){
let high = arr.length -1;
let low= 0
while(low<=high){
    let mid = Math.floor((high+low)/2);
    if(target === arr[mid]){
        return true;
    }
    if(arr[mid]>target){
      high =mid-1
    }else if (arr[mid]<target){
        low = mid+1
    }
}
return false;
}

let arr = [1,3,4,5,6,8,9,23,45]
console.log(binarySearch(arr,))