function QuickSort(arr){

    if(arr.length <=1){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left  = [];
    let right = [];
    

    for(let i =0 ; i< arr.length ;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else if (arr[i]>pivot){
            right.push(arr[i]);
        }
    }

    return [...QuickSort(left),pivot,...QuickSort(right)]
}
let arr = [35,7,4,2,1,45,645];
console.log(QuickSort(arr))