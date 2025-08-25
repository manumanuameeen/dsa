function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right)
}
function merge(left,rigth){
    let result = [];
    let i = j =0;
    while(i<left.length&&j<rigth.length){
        if(left[i]<rigth[j]){
            result.push(left[i])
            i++;
        }else{
            result.push(rigth[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(rigth.slice(j));
}
let arr = [234,6,43,234,53,987]
console.log(mergeSort(arr));
