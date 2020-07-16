const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send(`<h1>Pong</h1>`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.js"));
});

app.get("/item", (req, res) => {
    
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running on port: ', port);
});
