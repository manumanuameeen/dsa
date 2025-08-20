import fs from "fs";

fs.writeFile("../datas/filePath.txt","../datas/details.txt",(err,req)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("files is now updated congratulation")

})