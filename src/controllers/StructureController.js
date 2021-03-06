const mongoose = require("mongoose");

const Structure = mongoose.model("Structure");

module.exports = {
  async findall(req, res) {
    const structures = await Structure.find();

    return res.json(structures);
  },

  async findone(req, res) {
    const structure = await Structure.findById(req.params.id);
    return res.json(structure);
  },

  async store(req, res) {
    await Structure.create({
      title: req.body.nome,
      description: req.body.description,
      date: req.body.date,
      url: req.body.url
    });
    res.send("Tarefa cadastrada com sucesso!");
  },

  async update(req, res) {
    const structure = await Structure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send("Tarefa atualizada com sucesso!");
  },

  async destroy(req, res) {
    await Structure.findByIdAndRemove(req.params.id);
    res.send("Tarefa excluída com sucesso!");
  }
};
