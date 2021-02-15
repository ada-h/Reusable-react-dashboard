const { createProxyMiddleware } = require('http-proxy-middleware');

let appURI = `https://boiler.xend-utils.xyz/api`

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: appURI,
            changeOrigin: true,
        })
    );
};