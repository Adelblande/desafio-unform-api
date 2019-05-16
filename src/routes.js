const express = require('express');
const ContatoController = require('./controllers/ContatoController');

const routes = express.Router();


routes.get('/', (req, res) => {
  return res.send('Hello Bumblebee')
})
routes.post('/contato', ContatoController.store);

module.exports = routes;