import fs from "fs";
let val =[];
fs.readdir("../datas",(err,data)=>{
    if(err){
        console.log(err);
        return ;
    }
console.log(data)


})


