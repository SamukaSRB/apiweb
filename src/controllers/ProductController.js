const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports = {
//Apresentar todos os dados 
  async index(req, res) {   
    const category = await Category.findByPk(categ_id,{
      include: { association: 'product' }
    });
    return res.json(category.product);
  },

//Salvar os dados no base de dados
    async index(req, res) {
    const product = await Product.findAll();
    return res.json(product);
  },
//Busca por Id na base dedos
  async show (req, res) {
    const product = await Product.findAll({where: { id: req.params.id }
    });
    return res.json(product);
     },

//Metodo responsavel por salvar os dados na tabela do banco
  async store(req, res) {  
    const {name,description,price,url,categ_id} = req.body;
    const category = await Category.findByPk(categ_id);
    const product = await Product.create({
     name,
    description,
     price,
     url,
    categ_id,
    });
    return res.json(product);
  },
//Atualiza a base de dados
  async update (req, res) {
    const { name,description,price,url,categ_id } = req.body;  
    const  product = await Product.update({
      name:name,
      description:description,
       price:price,
       url:url,
       categ_id:categ_id,       
    }, {
        where: {
            id: req.params.id
        }
    });  
    return res.status(200).json({
        status: 'updated',
        product
    });
  },
//Responsavel por apagar um registro no banco de dados
  async destroy (req, res) {
    await Product.destroy({
        where: {
            id: req.params.id
        }
    });
  
    return res.status(204).json({
        status: 'removed'
    });
  },



};