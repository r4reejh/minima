const mn = require('../minima');


async function getExpense();



// get details for an expense, expenseId in params
mn.get('/expense', [], function(req, res){
    return res.end();
})

mn.post('/expense', [], parseHeader(), async function(req, res){
    try{
        body = JSON.parse(req.body);

        const sourceId = body.username;
        const amount = body.password;
        const userId = req.userId;

        if(!username || !password) return res.end(error);

        console.log()
    } catch(ex){
        return res.end("error");
    }
})