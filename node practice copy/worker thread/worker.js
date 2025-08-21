import {parentPort,threadId} from "worker_threads";


parentPort.postMessage("hello from worker threadId :"+threadId);


let sum =0;
for(let i =0 ;i<1e8;i++){
    sum+=1;
}
parentPort.postMessage(`worker threadId:${threadId} \nsum:${sum}`)

