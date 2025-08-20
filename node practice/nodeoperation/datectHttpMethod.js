import express from "express";
const app = express();

function detectMethod(req,res,next){
    if(req.method === "DELETE"){
        next();
    }else{
        console.error("only allowed delete");
        const err = new Error("the mehthod should be DELETE");
        err.status = 403;
        next(err)

    }
    
}

app.use("/some-routes",detectMethod)
console.log("/some-routes")

app.delete("/some-route",(req,res)=>{
    console.log("Delete request process");
})
app.get("/some-route",(req,res)=>{
    console.log("Delete request process");
})
app.use((err,req,res,next)=>{
    if(err.status || 500){
      res.status(err.status||500).json({error:err.message})
    }
})

app.listen(3000,()=>{
    console.log("server connected")
})