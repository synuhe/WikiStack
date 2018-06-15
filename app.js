const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const layout = require (`./views/layout.js`)
const models = require('./models')

const app = express()

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.get(bodyParser.urlencoded({ extended: false }))

// db.authenticate().then(() => {
//   console.log('connected to the database');
// })

const init = async()=>{
  await model.db.sync()

  app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
  });
}

init();

app.get('/', (req, res)=>{
  res.send(layout(''));
})

const PORT = 3000;


