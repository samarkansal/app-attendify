const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split(".").pop() === "css") {
    res.set("Content-Type", "text/css");
  }
  next();
});

app.listen(port);
