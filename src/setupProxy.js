const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/apis",
    createProxyMiddleware({
      target: "https://192.168.0.5:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/apis": "",
      },
      secure: false,
      // [hpm] error occurred while proxying request 해결법
    })
  );
};
