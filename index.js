const express = require('express')
const cors = require('cors')
const app = express()
let lector = ['pablo', 'adrian', 'pedro']
let num = 0
const net = require ('net');
let cod_cubeta


const options = {

  port: 4589,
  host: '127.0.0.1'

}

const client = net.createConnection(options)


client.on('data', (data)=>{

  cod_cubeta1= data[0].toString(16)
  cod_cubeta2= data[1].toString(16)
  cod_cubeta3= data[2].toString(16)

  cod_cubeta= cod_cubeta1+cod_cubeta2+cod_cubeta3


  const impresora = require ('./impresora')
  const route = cod_cubeta + '.txt';

  impresora.imprimir(route)

})

app.get('/', cors(), function (req, res) {
  console.log('comunicacion de ', req.headers.origin)
  //res.send('soy el back end :)')
  res.send(cod_cubeta)
  
})

app.get('/der/', cors(), function (req, res) {
  num++
  if (num > lector.length) {
    num = 0
  }
  res.send({
    code: 200,
    message: lector[num],
   
  })
  console.log(lector)
})

app.post('/der/', cors(), (req, res) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log('hola', req.body)

  /*   switch (req.body.plcvar) {
    case 200:
      //leer ddedl plc
      //res.send(respuesta del plc)
      break
    case 300:
      //escribir en el plc
      //res.send(respuesta del plc)
      break
    default:
      break
  } */
  res.send('adios')
})
function escribirlog(st) {
  console.log(st)
}

app.listen(3000)

escribirlog('servidor Iniciado')
