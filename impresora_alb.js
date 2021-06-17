const fs = require('fs');
const net = require ('net');


const options_alb = {
   
    host:'127.0.0.1',
    port: 9100,

}

function imprimir_alb (route) {

  const impresora_alb = net.createConnection (options_alb);

  let fileStream = fs.createReadStream(route);

  fileStream.on('open',function() {

    fileStream.pipe(impresora_alb);

      console.log('Archivo de albaranadora ' + route + ' impreso');

  });

}

module.exports = {
     
    'imprimir_alb':imprimir_alb
    

}



