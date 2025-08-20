import fs from "fs";

//give the removnig path

fs.unlink("../datas/filePath",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("path removed ")
})