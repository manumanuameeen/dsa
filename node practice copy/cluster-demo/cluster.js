// import cluster from "cluster";
// import os from "os";
// import http from "http"


// if(cluster.isPrimary){
// console.log(`primary process ${process.pid} is runing`);

// const numCpu = os.cpus().length


// for(let i=0 ;i<numCpu;i++){
//     cluster.fork();
// }


// cluster.on("exit",(worker,code,signal)=>{
//     console.log(`Worker ${worker.process.pid} died. Restarting`)
//     console.log("code",code)
//     console.log("signal",signal)
//     cluster.fork();
// })
   
// }else{
// const server = http.createServer((req,res)=>{
//     console.log(`Worker ${process.pid} handlning the request`)
//     res.writeHead(200);
//     res.end(`worker ${process.pid} is on the screen`)
// })
// server.listen(3000)
// console.log(`Worker ${process.pid} started`)

// }





// import cluster from "cluster";
// import os from "os";
// import http from 'http';
// if(cluster.isPrimary){
//     console.log(`Primay process ${process.pid} `);

//     let numCpu = os.cpus().length;

//     for(let i = 0;i<numCpu;i++){
//         cluster.fork();
//     };

//     cluster.on("exit",(worker,code,signal)=>{
//         console.log(`worker ${worker.process.pid} died. Restarting`);
//         cluster.fork();
//     })
// }else{
//     const server  = http.createServer((req,res)=>{
//         res.writeHead(200);
//         res.end(`worker ${process.pid} is on the page`);
//     })
//     server.listen(3000,()=>{

//         console.log(`worker ${process.pid} started onthe port 3000`)
//     })
// }
