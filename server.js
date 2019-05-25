const http = require("http");
const mn = require("../minima");
const fs = require('fs');

// expense tracker
const _SERVER = http.createServer(async function(req, res){
    try{
        //console.log(minima.routes);
        //console.log(minima.routes.post['/test'].next);
        return mn.routes[req.method][req.url].main(req, res);
    } catch(ex) {
        res.end("route not found");
        console.log("not found");
        console.log(ex);
    }
})

module.exports = _SERVER;


