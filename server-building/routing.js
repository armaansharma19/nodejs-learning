const http=require('http');

const server=http.createServer((req,res)=>{
    const url =req.url;
    if(url==='/'){
        res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input type="text" name="message" ><button type="submit">send </button></form>');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();//ends this block
    // this if block changes the req url to /message and when that req is sent again it dosnt make it to this if block 
    }
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello Guys</h1>');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');
})

server.listen(3000);