const fs = require('fs');
fs.renameSync("./questions.js","cahnge.js")

fs.rename("./first.txt","./storage/txt.txt",err=>{
    if(err){
        throw err;
    }
});
setTimeout(() => {
    fs.unlinkSync("./cahnge.js")
},4000);


