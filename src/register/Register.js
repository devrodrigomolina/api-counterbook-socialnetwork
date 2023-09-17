const Sequelize = require('sequelize');
const connection = require('../../database/connection');

const User = connection.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto_de_perfil: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    biografia: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = User;