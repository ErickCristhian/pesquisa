'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuarios', 
    'email' ,
    {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('usuarios', 
    'password' ,
    {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'recife2021'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuarios', 'email');
    await queryInterface.removeColumn('usuarios', 'password');
  }
};
