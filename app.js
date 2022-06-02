const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index')
})

let port = 3001; // Because I use GFNGames on 3000

app.listen(port, function () {
  console.log('AlloTechnos app listening on port 3001!')
})