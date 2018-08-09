const
    Sequelize = require('sequelize'),
    orm = require(`${apiRoot}/orm`)

let RoomType = orm.define('roomType', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = RoomType