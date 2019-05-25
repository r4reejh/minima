function jsonParser() {
    this.body = '';
    this.next = null;
    this.main = function(req, res) {
        try {
            req.on('data', (chunk) => this.body+=chunk);
            req.on('end', () => {
                req.body = this.body;
                console.log("inside jsonParser")
                console.log(this.next);
                this.next.main(req, res);
            });
        } catch(ex) {
            console.log('jsonParser error');
            console.log(ex);
        }
    }
}

module.exports = jsonParser;


