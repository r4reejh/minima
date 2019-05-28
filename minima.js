const _SERVER = require('./server')
const _LINK = require('./link')

const routes = {POST: {}, GET: {}};
const get = async (routeName, ...chainArgs) => routes.GET[routeName] = await chain(chainArgs);
const post = async (routeName, ...chainArgs) => routes.POST[routeName] = await chain(chainArgs);

const chain = async (args) => {
    try {
        let i = -1, len = args.length;
        args[len -1] = {main: args[len - 1]};
        while((++i+1) < len) {args[i].next = args[i+1]};
        return args[0];
    } catch(ex) {
        throw ex;
        console.log("setup error");
    }
} 

const listen = (_PORT, callback) => _SERVER.listen(_PORT, callback);

exports.routes = routes;
exports.get = get;
exports.post = post;
exports.server = _SERVER;
exports.link = _LINK;