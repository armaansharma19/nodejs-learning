const http =require('http')

const server=http.createServer((req,res)=>{
    console.log(req.method,req.headers,req.url);
    res.setHeader('Content-Type','text/html');//to set the meta data
    //res.setHeader() is used to set an HTTP response header before sending the body.
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello Guys</h1>');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');
    //res.write is used to send chunk of response body to the client
})

server.listen(3000);

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers