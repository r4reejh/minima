const http = require("http");
const mn = require("./minima");

// expense tracker
const _SERVER = http.createServer(async function(req, res){
    try{
        //console.log(mn.routes);
        if(mn.routes[req.method][req.url]) mn.routes[req.method][req.url].main(req, res);
        else res.end('{error:"route not found"}');
        //return console.log(req.url+": 200");
    } catch(ex) {
        res.end("server error");
        //return console.log(req.url+": 404");
    }
})

module.exports = _SERVER;


