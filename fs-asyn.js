const {readFile,writeFile} = require('fs')


readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    // else{
    //     console.log(result)
    // }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-asyn.txt',`${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result)
        })
    })
})
//we get buffer
