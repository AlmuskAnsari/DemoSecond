const http = require("http");
const url = require("url");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : "Text/html"});
    res.write("Helo ");
    let x = url.parse(req.url,true);
    // console.log(x);
    console.log(`Name : ${x.query.name}`);
    console.log(`Class : ${x.query.class}`);
    console.log(`sub : ${x.query.sub}`);
    res.write(`<Br><h3>Name : ${x.query.name}</h3>`);
    res.write(`<h3> Class : ${x.query.class}</h3>`);
    res.write(`<h3> Subject : ${x.query.sub}</h3>`);
    res.write(`<h3> Age  : ${x.query.age}</h3>`);
    res.write(`<h3> Addres  : ${x.query.address}</h3>`);
    res.end();
}).listen(4000);