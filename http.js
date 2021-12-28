const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
res.end('welcome to home page');
    }
    if(req.url === '/about'){
        res.end('welcome to abut page');
     }
    res.end(`<h1>opps</h1>
            <a href = "/">home</a>`)

    // console.log(req)
    // res.write('welcome to home page')
    // res.end()
})
server.listen(5000)