const express = require('express')
const novoapp = express()

novoapp.get('/oi', function(req,res){
  res.send('Olá Mundo')
})
novoapp.listen(3000)
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)