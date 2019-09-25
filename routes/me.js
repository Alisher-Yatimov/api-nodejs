const {Router} = require('express');
const router = Router();
const product = require('../models/product');

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const myItem = await product.findAll({where: {user_id: Number(id)}});
        res.status(200).json({
            myItem
        })
    } catch(e) {
        res.status(401).json({
            "message": "empty"
        })
    }
})


module.exports = router;