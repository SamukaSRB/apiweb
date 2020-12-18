const User = require('../models/User');


module.exports = {
  //Salvar os dados no base de dados
  
    async store(req, res) {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        return res.json(user);
      },

  //Aprenseta todos os dasdos
      async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  //Busca por Id na base dados
  async show (req, res) {
    const user = await User.findAll({where: { id: req.params.id }
    });
    return res.json(user);
     },   

//Atualiza a base de dados
async update (req, res) {
  const { name, email } = req.body;
  const user = await User.update({
      name:  name,
      email: email     
  }, {
      where: {
          id: req.params.id
      }
  });
  return res.status(200).json({
      status: 'updated',
      user
  });
},

//Responsavel por apagar um registro no banco de dados
async destroy (req, res) {
  await User.destroy({
      where: {
          id: req.params.id
      }
  });
  return res.status(204).json({
      status: 'removed'
  });
}
}