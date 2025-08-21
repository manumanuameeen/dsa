import fs from "fs";


const writeStream = fs.createWriteStream("../datas/doubleNUmber.txt")
let num =1;
const limit  = 100;

while(num<limit){
    writeStream.write(num.toString()+"\n");
    num*=2
}

writeStream.on("finish",()=>{
    console.log("file completed")
})