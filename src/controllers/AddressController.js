const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
  //Apresentar todos os dados 
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });
    return res.json(user.addresses);
  },

//Salvar os dados no base de dados
  async store(req, res) {  
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });
    return res.json(address);
  },
  
  //Atualiza a base de dados
  async update (req, res) {
    const { zipcode, street, number} = req.body;  
    const  address = await  Address.update({
      zipcode:zipcode,
      street:street,
      number:number,
      user_id: user_id,    
    }, {
        where: {
            id: req.params.id
        }
    });  
    return res.status(200).json({
        status: 'updated',
        address
    });
  },

//Responsavel por apagar um registro no banco de dados
  async destroy (req, res) {
    await  Address.destroy({
        where: {
            id: req.params.id
        }
    });  
    return res.status(204).json({
        status: 'removed'
    });
  },

};