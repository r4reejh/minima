function jsonParser(req, res){
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
            this.next.main(req, res);
        } catch(ex) {
            console.log(ex);
            req.body = this.body+"ee";
            return this.next.main(req, res);
        }
    });
};

module.exports = jsonParser;