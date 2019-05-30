const http = require('http');
const mn = require('./minima');

const _SERVER = http.createServer(async function(req, res) {
  try {
    if (mn.routes[req.method][req.url]) {
      mn.routes[req.method][req.url].main(req, res);
    } else res.end('{error:"route not found"}');
  } catch (ex) {
    res.end('server error');
  }
});

module.exports = _SERVER;


