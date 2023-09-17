const Sequelize = require('sequelize');
const connection = require('../../database/connection');
const User = require('../register/Register');
const Post = require('../posts/Posts');

const Reaction = connection.define('reactions', {
    type: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

Reaction.belongsTo(User, { foreignKey: 'user_id' });
Reaction.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Reaction;