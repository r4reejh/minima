const _SERVER = require('./server');
const _LINK = require('./link');

const routes = {POST: {}, GET: {}};

const get = async (routeName, ...chainArgs) =>
  routes.GET[routeName] = await chainBuilder(chainArgs, 0);

const post = async (routeName, ...chainArgs) =>
  routes.POST[routeName] = await chainBuilder(chainArgs, 0);

const chainBuilder = async (args, i) => {
  if (i == args.length - 1) return {main: args[i]};
  args[i].next = await chainBuilder(args, i+1);
  return args[i];
};

exports.routes = routes;
exports.get = get;
exports.post = post;
exports.server = _SERVER;
exports.link = _LINK;
