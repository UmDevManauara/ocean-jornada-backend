const express = require('express')
const app = express()


app.get('/', function (req, res) {
res.send('Hello World')
})
//desafio
app.get('/oi', function(req,res){
  res.send('Olá Mundo!!')
})
// List de itens
//Endpoint de Read All [GET] /item
const itens = [' Rick Sanchez', ' Morty Smith', 'Summer Smith']
app.get('/item', function (req, res){
  res.send(itens)
})
app.listen(3000)