const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html><body><h1>Room Rooom!!</h1> <form action="/create-user" method="POST"><input type="text" name="username" ><button type="submit">send </button></form></body></html>');
        res.end();

    }
    if(url==='/users'){
        res.write('<html><body><ul><li>u1</li><li>u2</li><hr></ul></body></html>');
        res.end();
    }
    if (url === '/create-user' && method === 'POST') {

        const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const parsed = new URLSearchParams(Buffer.concat(body).toString());
      const username = parsed.get('username') || '';
      console.log('New user:', username);

      res.statusCode = 302;
      res.setHeader('Location', '/users');
      res.end();
    });
    return;
    }
})


server.listen(3000);