const fs = require('fs');
const net = require ('net');


const options_ruta = {
   
  host:'127.0.0.1',
  port: 9105,

}


function imprimir_ruta (ruta) {

    const impresora_ruta = net.createConnection (options_ruta);
  
    let fileStream = fs.createReadStream (ruta);
  
    fileStream.on('open', function(){
      
      fileStream.pipe(impresora_ruta);
  
      console.log('Archivo de ruta ' + ruta + ' impreso')
  
    });
  }


module.exports = {
     
  'imprimir_ruta':imprimir_ruta
  

}


