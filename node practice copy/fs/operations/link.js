import fs from "fs";

fs.link("../datas/details.txt","../datas/hardLink2.txt",(err,data)=>{
    if(err){
        
        console.error(err);
    }

    console.log("Hard link created")

})