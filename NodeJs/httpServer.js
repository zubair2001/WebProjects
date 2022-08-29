const {Console} = require('console');
const fs = require('fs')
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
    res.statusCode=200;
    res.end('<h1>Hello World</h1>');}
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>Hello World.. This is the about page..</h1>');
    }
    else if(req.url=='/home'){
        res.statusCode=200;
        const data = fs.readFileSync('./testWeb.html');
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(port,()=>{console.log(`Server is listening on port ${port}`);}
);