import fs from "fs";

fs.mkdir("../datas/myFolder3",(err)=>{
    if(err){
        console.log(err);
        return 
    }else{

        console.log("folder created")
    }
})