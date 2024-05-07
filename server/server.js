const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Create an Express application
const app = express();

app.options("*", cors({
  origin: "*", // Allow all origins for testing
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(cors({
  origin: "*", // Allow requests from any domain
  methods: ["GET", "POST", "OPTIONS"], // Define allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Define allowed headers
  credentials: true, // Allow cookies and authentication information
}));



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

app.get('/',(req,res)=>{
  res.send("Hello");
})

// Start the server
module.exports = app;

