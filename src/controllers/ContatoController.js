const Contato = require('../models/Contato');

class ContatoController {
  async store(req, res) {
    const contatoNovo = await Contato.create({ nome: req.body.nome, telefone: req.body.telefone, email: req.body.email });
    return res.json(contatoNovo);
  }
  async show() {

  }
  async update() {

  }
  async delete() {

  }
}

module.exports = new ContatoController();