const mn = require('../minima');
const jsonParser = require('../sample-links/jsonParserSimple')

mn.get("/users", async function(req, res){
    return res.end("hello world");
});

mn.post("/test", jsonParser, async function(req, res){
    return res.json(req.body);
})

mn.server.listen(3000, ()=> {
    console.log('server listening on port 3000');
});