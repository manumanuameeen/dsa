
process.on("message",(msg)=>{
    console.log('mesage fromparent:'+msg.text);

    process.send({text:"helloparent from child"})
});



