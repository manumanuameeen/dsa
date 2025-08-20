import fs from "fs";

fs.rmdir("../datas/myFolder2",{recursive:true}, (err) => {
    if (err) {
        console.error(err);
    }
console.log("rmoved the dir")
}


)