const minima = require('../minima');
const fs = require('fs');
const jsonParser = require('../middlewares/jsonParser');

// test middleware
minima.post("/test", [new jsonParser()], (req, res)=>{
    console.log('parsed');
    return res.end('send');
})

// get user details
minima.get("/user", [], (req, res)=> {
    res.setHeader('content-type','application/json');
    return res.end(JSON.stringify({hello:"world"}));
})

// create user
minima.post("/user", [], (req, res)=>{
    res.setHeader('content-type','application/json');
    return res.end(req.body);
})

minima.get("/video", [], (req, res)=> {
    res.setHeader('content-type','video/mp4');
    res.setHeader('content-disposition', 'attachment;filename=sample.mp4');
    fs.createReadStream("sample.mp4").pipe(res);
})