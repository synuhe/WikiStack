const morgan = require('morgan') //Get Morgan
const express = require('express') //Get Express
const bodyParser = require('body-parser') //Get Body Parser
const layout = require('./views/layout.js') //Get Layout
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express()   //Express To App

const models = require('./models');
const init = async () => {
   await models.db.sync({force: true});

   app.listen(PORT, ()=> {
       console.log(`Listening to ${PORT}`);
   });
}
init();

app.use(morgan('dev')); //Logger
app.use(express.static(__dirname + '/public')); //Public Folder For Static
app.use(bodyParser.urlencoded({ extended: false })) //For Input Parsing

app.get('/', (req, res) => {
   res.redirect('/wiki');
})
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => { //Main Page
   res.send(layout(''));
})


const PORT = 3000; //Calls Port
