const express = require('express')
const routes = express.Router();
const views = require('../views')
const models = require(`../models`)

routes.get('/', (req, res) => {
   res.send('Why')
})

routes.post('/', async(req, res, next) => {
 const page = new models.Page({
   author: req.body.author,
   title: req.body.title,
   content: req.body.content,
   slug: req.body.title,
 })


  try {
    await page.save()
    console.log("it saved")
    res.redirect(`/`)
  } catch(error){
    next(error)
  }
})

routes.get('/add', (req, res) => {
   res.send(views.addPage())
})

routes.get('/:slug', async(req, res, next) => {
  try{
    const page = await models.Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.json(views.wikiPage(page))
  } catch (error){
    next(error)
  }
});

module.exports = routes;
