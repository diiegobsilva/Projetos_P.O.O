import {  } from 'mysql2';
const Sequelize = require('sequelize');

const database = require('./connect')
const clienteId = require('./clienteTable')

const clienteHistorico = database.define('clienteHistorico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: clienteId, 
          key: 'id'
        }
      },
    quantidadeVendida: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valorCompra: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nomeItem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoItem: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    generoCliente: {
      type: Sequelize.STRING,
      allowNull: false
    }
})

 //clienteHistorico.sync({ alter: true });

module.exports = clienteHistorico;