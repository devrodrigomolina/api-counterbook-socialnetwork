const Sequelize = require('sequelize');
const connection = require('../../database/connection');

const Posts = connection.define('posts', {
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Posts;