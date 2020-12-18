module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Categories', 
    [
      {
       
        name: 'Alimento',
         created_at:10/10/2020,
        updated_at:10/10/2020,
      },
      {
     
        name: 'Vestuario',       
        created_at:10/10/2020,
        updated_at:10/10/2020,
      },
      {
      name: 'Limpeza',       
      created_at:10/10/2020,
      updated_at:10/10/2020,
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};