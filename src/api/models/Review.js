const
    Sequelize = require('sequelize'),
    orm = require('../orm');

let Review = orm.define('review', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Review;