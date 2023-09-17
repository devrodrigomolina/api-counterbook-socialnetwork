const Sequelize = require('sequelize');
const connection = require('../../database/connection');
const Posts = require('../posts/Posts');

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

Posts.hasMany(User); // Relacionamento de uma categoria para muitos artigos ( UMA CATEGORIA PODE TER MUITOS ARTIGOS )
User.belongsTo(Posts); // Relacionamento de um artigo para uma categoria ( UM ARTIGO PERTENCE A UMA CATEGORIA )

module.exports = User;