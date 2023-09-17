const Sequelize = require('sequelize');
const connection = require('../../database/connection');

const Login = connection.define('login', {
    user: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Login;