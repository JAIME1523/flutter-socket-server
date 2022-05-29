const express = require("express");
const { resolve } = require('path')
require("dotenv").config()
const app = express()

//bode.socket Server.
const server = require("http").createServer(app);

module.exports.io = require("socket.io")(server)

require("./sockets/socket.js");
const { PORT } = process.env

const publicPath = resolve(__dirname, "public");
app.use(express.static(publicPath));
server.listen(PORT, (err, res) => {
    if (err) throw new Error(err)

    console.log("Servidor corriendo en puerto :", PORT)
})