const http = require("http");
const mn = require("./minima");

// expense tracker
const _SERVER = http.createServer(async function(req, res){
    try{
        mn.routes[req.method][req.url].main(req, res);
        return console.log(req.url+": 200");
    } catch(ex) {
        res.end("route not found");
        return console.log(req.url+": 404");
    }
})

module.exports = _SERVER;


