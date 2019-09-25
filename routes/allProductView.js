const {Router} = require('express');
const product = require('../models/product.js');
const router = Router();

router.get('/', async (req, res) => {
    try{
        const productList = await product.findAll({raw: true});
        res.status(200).json({
            productList
        })
        // console.log(productList)
    } catch(e) {
        console.log(e);
    }    
});

router.post('/', async (req, res) => {
    try{
        const newProduct = await product.create({
            title: req.body.title,
            price: req.body.price,
            img: req.body.img,
            user_id: req.body.user_id
        })
        
    } catch(e) {
        console.log(e)
        res.status()
    }
})



module.exports = router;