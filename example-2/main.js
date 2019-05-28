const mn = require('../minima');
const jsonParser = require('../sample-links/jsonParser')

mn.get("/users", async function(req, res){
    return res.end("hello world");
});

mn.post("/test", new jsonParser(), async function(req, res){
    return res.end(req.body);
})

mn.server.listen(3000, ()=> {
    console.log('server listening on port 3000');
});