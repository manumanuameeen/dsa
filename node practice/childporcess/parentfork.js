
import {fork} from 'child_process'

const child  = fork("./forkchild.js");

child.send({text :"hloo from parent"+process.pid});

child.on("message",(msg)=>{
    console.log(`parent got message:${msg.text}`)
})


