const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const connection = new Sequelize(dbConfig);

module.exports = connection;
