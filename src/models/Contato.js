const mongoose = require('mongoose');

const Contato = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
}, {timestamp: true})

module.exports = mongoose.model('Contato', Contato);