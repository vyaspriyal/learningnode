const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent",(message,user)=>{
    console.log(`${user}:${message}`);
    })
    

emitter.emit("customEvent","hello world","computers")
process.stdin.on("data",data =>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent","GoodBye!","process");
        process.exit();
    }
    emitter.emit("customEvent",input,"terminal");

})
