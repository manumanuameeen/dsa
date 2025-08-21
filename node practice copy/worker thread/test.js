import path from "path";
import { Worker } from "worker_threads";

const worker = new Worker(path.resolve("./worker.js"));

worker.on("message",(msg)=>{
console.log(`message from worker thread: ${msg}`)
})
worker.on("error",(msg)=>{
console.log(`error founded from worker thread: ${msg}`)
})
worker.on("exit",(code)=>{
console.log(`worker exited with the code :${code}`)
})

const worker2 = new Worker(path.resolve("./worker.js"));

worker2.on("message",(msg)=>{
    console.log(`message from worker2: ${msg}`)
})
worker2.on("exit",(code)=>{
    console.log(`worker exited with code : ${code}`)
})
worker2.on("error",(error)=>{
    console.log(`error found in the worker: ${error}`)
})