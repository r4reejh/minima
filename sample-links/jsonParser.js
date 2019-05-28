const minima = require('../minima');

const jsonParser = {
    main: async function (req, res){
        this.body = "";
    
        res.json = function(val) {
            try {
                this.setHeader('content-type', 'application/json');
                return this.end(JSON.stringify(val, null, 0));
            } catch(ee) {
                console.log(ee);
                throw ee;
            }
        }
    
        req.on('data', (chunk) => {
            if(chunk) this.body+=chunk;
        });
    
        req.on('end', () => {
            try{
                req.body = JSON.parse(this.body);
                //req.body = this.body;
                this.next.main(req, res);
            } catch(ex) {
                console.log(ex);
                req.body = {};
                return this.next.main(req, res);
            }
        });
    }
}

const jsonParserLink = minima.link.create(jsonParser);
const jsonParserFactory = () => {
    return new jsonParserLink();
}
module.exports = jsonParserFactory;