const { Model, DataTypes } = require('sequelize');

class Ata extends Model {
    static init(sequelize) {
        super.init({
            gestao: DataTypes.STRING,
            fundo: DataTypes.STRING,
            n_doc: DataTypes.STRING,
            colecao: DataTypes.STRING,
            descricao: DataTypes.STRING,
            observacao: DataTypes.STRING,
            data_doc: DataTypes.DATE,
            folhas: DataTypes.INTEGER,
            palavras_chave: DataTypes.STRING,
            resumo: DataTypes.STRING,
            condicao_de_preservacao: DataTypes.STRING,
            condicao_documento: DataTypes.STRING,
            pesquisador: DataTypes.STRING,
            data_catalogacao: DataTypes.DATE,
            pdf_link: DataTypes.STRING,
            ext_link: DataTypes.STRING,
            location: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'atas'
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}


module.exports = Ata;