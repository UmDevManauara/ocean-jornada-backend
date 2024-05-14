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
// 0   1  2
app.get('/item', function (req, res){
  res.send(itens)
})
// Endpoit Read Single by ID / item/:id
app.get('/item/:id', function (req, res){
  //acessa o parâmetro de rota ID
  const id = req.params.id

// acessa o item na lista usando ID - 1
const item = itens[id - 1]
//enviamos o item encontrado como resposta
  res.send(item)
})
app.listen(3000)