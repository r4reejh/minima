const _SERVER = require('./server')
const _LINK = require('./link')

const routes = {POST: {}, GET: {}};
const get = async (routeName, chainArgs, handler) => routes.get[routeName] = await chain(chainArgs, handler);
const post = async (routeName, chainArgs, handler) => routes.post[routeName] = await chain(chainArgs, handler);

const chain = async (args, handler) => {
    try{
        for(i=0; i<args.length -1; i++){args[i].next = args[i+1];};
        if(args.length > 0) args[args.length - 1].next = {main: handler};
        else args[0] = {main: handler};
        return args[0];
    } catch (ex){
        return {
            main: function() {
                console.log("setup error");
            }
        };
    }
}

const listen = (_PORT, callback) => _SERVER.listen(_PORT, callback);

exports.routes = routes;
exports.get = get;
exports.post = post;
exports.server = _SERVER;
exports.link = _LINK;