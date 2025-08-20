

let arr = [1,3,5,6,32];
let n= arr.length;

for(let i =0 ; i < n ;i++){

    let swapped = false;

    for(let j =0 ; j < n - 1 - i ; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] =      [arr[j+1], arr[j]]
            swapped = true;
        }
    }
    if(!swapped){
        break;
    }

}console.log(arr)