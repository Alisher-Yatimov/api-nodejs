const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const product = require('./product');
const user = sequelize.define('Users', {
    user_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    phone: {
        type: Sequelize.INTEGER
    },
    name: {
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
    }
})

// user.hasMany(product);
module.exports = user