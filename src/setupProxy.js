const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:9000",
      //target: "http://192.168.0.6:8000",
      pathRewrite: { "^/api": "" },
      changeOrigin: true,
      secure: false,
    })
  );
};
