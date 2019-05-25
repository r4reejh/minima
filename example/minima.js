const routes = {
    post: {}, get: {}
};

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

const get = async (routeName, chainArgs, handler) => routes.get[routeName] = await chain(chainArgs, handler);
const post = async (routeName, chainArgs, handler) => routes.post[routeName] = await chain(chainArgs, handler);

exports.routes = routes;
exports.get = get;
exports.post = post;