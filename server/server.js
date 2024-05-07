const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Create an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy middleware setup
app.use(
  "/proxy",
  createProxyMiddleware({
    changeOrigin: true,
    target: "", // We'll set this dynamically using `router`
    router: (req) => {
      // Extract the portion after "/proxy/"
      const proxyTarget = req.originalUrl.split("/proxy/")[1];
      const url = new URL(proxyTarget);

      // Use protocol and host to set the target
      return `${url.protocol}//${url.host}`;
    },
    pathRewrite: (path, req) => {
      // Extract path and query from original URL
      const proxyTarget = req.originalUrl.split("/proxy/")[1];
      const url = new URL(proxyTarget);

      // Return only the path and query parts
      return url.pathname + url.search;
    },
    logger: console,
  })
);

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
