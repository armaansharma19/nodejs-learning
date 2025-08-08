const http=require('http');
const fs=require('fs');
const { method } = require('lodash');
const server=http.createServer((req,res)=>{
    const url =req.url;
    const method=req.method;
    if(url==='/'){
        console.log('heeey')
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
    if(url==='/message' && method==='POST'){
        console.log('heeey')
        const body=[];
        req.on('data',(e)=>{
            body.push(e);

        })
        req.on('end',()=>{
            const m=Buffer.concat(body).toString();
            console.log('heeey')
            const text=m.split('=')[1];
            fs.writeFileSync('message.txt',text);
        })
        
        //res.writeHead(302);
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();
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