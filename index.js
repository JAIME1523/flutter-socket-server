const express = require('express');


const path = require('path');
const app = express();
require('dotenv').config();

//para el puerto
const server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);
require('./sockets/socket.js')
//App de express

//path publico direcciona a ese path




//Node server 





const publicPath = path.resolve(__dirname, 'public')
//para hacer uso de ese path
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) {
        throw new Error(err);
    }

    else {
        console.log('Servidor correindo ', process.env.PORT);
    }
});