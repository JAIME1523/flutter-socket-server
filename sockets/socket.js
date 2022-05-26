const { io } = require('../index.js');



//Mensahes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado')
    // client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('CLiente desconectado') });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' });

    });
});
