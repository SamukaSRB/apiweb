module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
    [
      {
       
        name: 'John Doe',
        email: 'test@medium.com',
        created_at:10/10/2020,
        updated_at:10/10/2020,
      },
      {
     
        name: 'John Travolta',
        email: 'test2@medium.com',
        created_at:10/10/2020,
        updated_at:10/10/2020
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};