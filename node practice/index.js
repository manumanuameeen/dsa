import express  from "express"
const app = express();
let PORT = 3000;
import dotenv from "dotenv"
dotenv.config()

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/about/:num22",(req,res)=>{
const num1 = parseFloat(req.params.num22)
const num2 = parseFloat(req.query.num2)

console.log('advasdv')
console.log("adv"+num1)
console.log("adv"+num2)
const result = num1+num2
res.send("the sum of result is: "+result)
})


const nodeEnv = process.env.NODE_ENV;


app.listen(PORT,()=>{
    console.log(`server connected port :${PORT} `)
    // console.log(nodeenv)
    console.log(`Current environment: ${process.env.SUPER_KEY}`);
})