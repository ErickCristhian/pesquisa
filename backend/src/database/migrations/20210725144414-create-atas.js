'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('atas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'usuarios', key: 'id' },
        defaultValue: 1,
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      gestao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      fundo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      n_doc: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      colecao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      data_doc: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      folhas: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      palavras_chave: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      resumo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      condicao_de_preservacao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      condicao_documento: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      pesquisador: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      data_catalogacao: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      pdf_link: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      ext_link: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Arquivos',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('atas');
  }
};
