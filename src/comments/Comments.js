const Sequelize = require('sequelize');
const connection = require('../../database/connection');
const User = require('../register/Register');

const Comments = connection.define('comments', {
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Comments.belongsTo(User, { foreingKey: 'user_id' })
Comments.belongsTo(Post, { foreingKey: 'post_id' })

module.exports = Comments;