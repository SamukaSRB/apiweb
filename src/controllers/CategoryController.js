const Category = require('../models/Category');

module.exports = {
//Salvar os dados no base de dados
    async store(req, res) {
        const { name } = req.body;
        const category = await Category.create({ name });
        return res.json(category);
      },
      //Aprenseta todos os dasdos
    async index(req, res) {
    const category = await Category.findAll();
    return res.json(category);
  },

  //Busca por Id na base dedos
  async show (req, res) {
    const category = await Category.findAll({where: { id: req.params.id }
    });
    return res.json(category);
},

//Atualiza a base de dados
async update (req, res) {
  const { name} = req.body;
  const category = await Category.update({
    name:  name,     
  }, {
      where: {
          id: req.params.id
      }
  });
  return res.status(200).json({
      status: 'updated',
      category
  });
},

//Responsavel por apagar um registro no banco de dados
async destroy (req, res) {
  await Category.destroy({
      where: {
          id: req.params.id
      }
  });
  return res.status(204).json({
      status: 'removed'
  });
}
}