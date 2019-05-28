const minima = require('../minima');

const jsonParser = {
    main: async function main(req, res){
        try {
            req.on('data', (chunk) => {
                if(chunk) this.props.body+=chunk;
            });
            req.on('end', () => {
                req.body = this.props.body;
                this.next.main(req, res);
            });
        } catch(ex) {
            console.log('jsonParser error');
            console.log(ex);
        }
    },
    props: {
        body: ""
    }
}

const jsonParserLink = minima.link.create(jsonParser);
module.exports = jsonParserLink;