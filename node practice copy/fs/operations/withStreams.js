import fs from "fs";


const readStream = fs.ReadStream("../datas/filePath.txt","utf-8");
const writeStream = fs.WriteStream("../datas/funny.txt")

readStream.on("data",( chunks)=>{
    console.log("Data recieved by chunkd:"+chunks.length);
})

readStream.on("end",()=>{
    console.log("finish reading the file")
})

readStream.on("error",(err)=>{
    console.log("error found in this file :"+err)
})

writeStream.on("finish",()=>{
    console.log("data writed succesfully ..!!")
})
writeStream.on("end",(err)=>{
    console.log("data foudn err ")
})

readStream.pipe(writeStream)