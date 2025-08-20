// import fs from "fs";
import express from "express"

const app = express()
let arr = [1,2,3,4,5,7,8]

// function promise(num){
//     return promise((res,rej)=>{
//         if(arr.some(num)){
//             let date = new Date()
//             res(true)
//         }else{
// rej("not in the array")
//         }
//     })
// }

// const result = async () => {
//     try {
        
// const result  = await promise()
// if(result){
//      fs.writeFile("./promise.txt",date)
// }
// console.log("200 OK")
//     } catch (error) {
//         console.error("500 ")
//     }
// }

app.get("/",(req,res)=>{
 fs.readFile("./promise.txt",(err,data)=>{
    if(err){
        console.error(err)
    }
    console.log(data)
 })
})
app.listen(3000,()=>{
    console.log("server runing on port 3000")
})



const middleware=async (req,res,next) => {
    let token = req.token;
try {
    if(token){
        next();
    }
    console.log("200 OK")
} catch (error) {
    console.log(error)
}
}

app.get("/",middleware,(req,res)=>{
    res.send("Succesfull")
})


