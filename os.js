const os = require('os')


//info  about current user 
const user = os.userInfo()
// console.log(user)
//method returns system uptime in secs 
console.log(`the system uptime is ${os.uptime()} seconds`); 
//c
const current = {
    name:os.type(),
    release:os.release(),
    tottalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(current)