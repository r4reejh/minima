const http = require("http");
const minima = require("../minima");
const fs = require('fs');
require('./routes/index')

// expense tracker

minima.get('/favicon.ico', [], (req, res) => fs.createReadStream('favicon.png').pipe(res));
minima.get('/test', [], (req, res)=> res.end(JSON.stringify({hello: "world"})));

http.createServer(async function(req, res){
    try{
        //console.log(minima.routes);
        //console.log(minima.routes.post['/test'].next);
        return minima.routes[req.method.toLowerCase()][req.url].main(req, res);
    } catch(ex) {
        res.end("route not found");
        console.log("not found");
        console.log(ex);
    }
})
.listen(4000, () => {
    console.log("Server Listening on Port 4000");
});