const express = require('express');
const app = express();
const path = require('path');
const allProductView = require('./routes/allProductView');
const login = require('./routes/login');
const registration = require('./routes/registration');
const singleProductView = require('./routes/singleProductView');
const me = require('./routes/me');
const user = require('./models/user');
const product = require('./models/product')
const sequelize = require('./utils/database')
const PORT = process.env.PORT || 3000; 


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/productView', allProductView);
app.use('/api/login', login);
app.use('/api/register', registration);
app.use('/api/item', singleProductView);
app.use('/api/items', allProductView);
app.use('/api/me', me);

async function start() {
    try{
        await sequelize.sync()
        app.listen(PORT);
    }catch(e) {
        console.log(e)
    }
}

start()
