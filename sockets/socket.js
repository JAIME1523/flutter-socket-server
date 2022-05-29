const { io } = require('../index.js');
const Bands = require('../models/bands');
const Band = require('../models/band');


const bands = new Bands();


bands.addBans(new Band('Cyclo'));
bands.addBans(new Band('Rider'));
bands.addBans(new Band('Pruebas'));
bands.addBans(new Band('Queen'));

console.log(bands)


//Mensahes de Sockets
io.on('connection', client => {


    console.log('Cliente Conectado')



    client.emit('active-bands', bands.getBands());



    // client.on('event', data => { /* … */ });
    client.on('disconnect', () => { console.log('CLiente desconectado') });

    client.on('mensaje', (payload) => {
        // console.log('Mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' });

    });


    client.on('vote-band', (payload) => {
        // console.log(payload.id);
        bands.voteBand(payload.id);
        // console.log(bands.getBands());
        //le envia los datos a todos los conectados en el servido
        io.emit('active-bands', bands.getBands());
    })

    
    client.on('add-band', (payload) => {

        bands.addBans(new Band(payload.name));

        //le envia los datos a todos los conectados en el servido
        io.emit('active-bands', bands.getBands());
    })

   
    client.on('delete-band', (payload) => {
        console.log(payload.id);
        bands.deleteBand(payload.id);
        // console.log(bands.getBands());
        //le envia los datos a todos los conectados en el servido
        io.emit('active-bands', bands.getBands());
    })

    // client.on('emitir-mensaje', (payload) => {

    //     // console.log(payload);
    //     // io.emit('nuevo-mensaje', payload);//lo emite a todos los clientes que
    //     client.broadcast.emit('nuevo-mensaje', payload);   //emitir a todos menos al que manda
    // });


});
