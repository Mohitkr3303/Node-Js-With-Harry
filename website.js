const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    console.log(req.url);
    if(req.url == "/about"){
        res.statusCode = 200;
        res.end("<h1>About Page</h1>");
    }
    else if(req.url == '/'){
        res.statusCode = 200;
        res.end(file);
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.end("<h1>Contact Page</h1>");
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>");
    }
}) 

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})