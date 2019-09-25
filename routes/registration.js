const {Router} = require('express');
const router = Router();
const user = require('../models/user')


router.post('/', async (req, res) => {
    try{
        const errUser = await user.findAll({where: 
            {
                email: req.body.email,
                name: req.body.name
            }
        });
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        })
        if(errUser === null){
        res.status(200).json({
            newUser
        })
    } else{
        res.status(422).json({
            "field":"current_password",
            "message":"Wrong current password"

        })
    }
    } catch(e) {
        console.log(e);
    }
})


module.exports = router;
