const fs = require('fs');
const path = require('path');
const net = require ('net');
const { pathToFileURL } = require('url');



const options = {
   
    host:'127.0.0.1',
    port: 9100,

}

function imprimir (route) {

const client = net.createConnection (options) 

fs.readdir(__dirname, (err, files) => {

  if (err)
    console.log(err);

  else {

    files.forEach(file => {

      if (path.basename(file) == route){

        console.log(file + ' encontrado');

        var fileStream = fs.createReadStream(route);

        fileStream.on('open',function() {

            fileStream.pipe(client);

            console.log('impreso')  
            
        });
      
      }
    
    });   
  }

});

}

module.exports = {
     
    'imprimir':imprimir

}

imprimir()
