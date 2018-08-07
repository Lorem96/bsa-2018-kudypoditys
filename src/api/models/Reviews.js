const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`);

module.exports = orm.define('reviews', {
   content: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.DATE
    }
});