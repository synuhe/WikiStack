const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const layout = require (`./views/layout.js`)

const app = express()

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.get(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res)=>{
  res.send(layout(''));
})

const PORT = 3000;

app.listen(PORT, ()=>{
  console.log(`App listening in port ${PORT}`)
})
