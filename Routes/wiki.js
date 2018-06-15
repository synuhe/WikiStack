const express = require('express')
const routes = express.Router();
const views = require('../views')
const models = require(`../models`)


routes.get('/', (req, res) => {
   res.send('A')
})

routes.post('/', async(req, res, next) => {
 const page = new models.Page({
   title: req.body.title,
   content: req.body.content,
   slug: req.body.title,
 })


  try {
    await page.save()
    res.redirect(`/`)
  } catch(error){
    next(error)
  }
})

routes.get('/add', (req, res) => {
   res.send(views.addPage())
})

module.exports = routes;
