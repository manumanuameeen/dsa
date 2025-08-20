import fs from "fs";


fs.copyFile("../datas/copy.txt","../datas/paste.txt",(err)=>{
    if(err){
        conscole.error(err);
   return;
    }
    console.log("file coppies succefully");
})