const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Pages = db.define('page', {
  title: {type: Sequelize.STRING},
  slug:  {type: Sequelize.STRING, validate: {isURL: true}},
  content: {type: Sequelize.STRING},
  status:  {type: Sequelize.STRING}
})

const User = db.define('user', {
  name: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING}
})




module.exports = {
  db
}
