import fs from "fs";

fs.readFile("../datas/userData.txt","utf8",(err,data)=>{

if(err){
    console.error(err);
    return;
}

fs.writeFile("../datas/filePath",data,(err,data)=>{

if(err){
    console.error(err);
    return ;
}
console.log("file writed")
})
})

fs.readFile("../datas/filePath","utf-8",(err,data)=>{
    if(err){
        console.error(err);
    }
    console.log(data)
})





