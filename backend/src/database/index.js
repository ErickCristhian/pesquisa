const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Ata = require('../models/Ata');
const connection = new Sequelize(dbConfig);


User.init(connection);
Ata.init(connection);

Ata.associate(connection.models);

module.exports = connection;