const express = require("express");

const handler = require("./httpHandler.js");

const gameController = require("./gameController");

const server = express();

server.use("/old", handler.main);
serve.use("/game", gameController.router);

server.listen(3000);

console.log("http://localhost:3000");