const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const user = require('./user');

const product = sequelize.define('Product', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    img: Sequelize.STRING,
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
product.hasMany(user , {foreignKey: 'user_id'});
user.belongsTo(product, {foreignKey: 'user_id'}); 
module.exports = product