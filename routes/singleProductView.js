const {Router} = require('express');
const product = require('../models/product');
const router = Router();


router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const currProduct = await product.findOne({where: Number(id)});
        if(currProduct){
            res.status(200).json({
                currProduct
            })
        }
        else{
            res.status(404).json({
                "title": "not found"
            })
        }
    } catch(e) {
        console.log(e);
    }
})

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        if(req.body.title.length < 3){
            res.status(422).json({
                "field":"title",
                "message":"Title should contain at least 3 characters"
            })
        }else{
        const changeItems = await product.update({
            title: req.body.title,
            price: req.body.price,
            img: req.body.img
        }, {
            where: {id: Number(id)}
        })
    }
        const currItems = await product.findOne({where: {id: Number(id)}});
        if(!changeItems){
            res.status(404).json({
                "message": "not found"
            })
        }
        res.status(200).json({
            currItems
        })
        console.log(currItems.title)
    } catch(e){
        console.log(e)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const delItem = await product.destroy({where: {id: Number(id)}});
        res.status(200).json({
            delItem
        })
    } catch(e) {
        res.status(404).json()
    }
    
})


module.exports = router;