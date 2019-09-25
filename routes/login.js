const {Router} = require('express');
const router = Router();
const user = require('../models/user')

router.get('/', async (req, res) => {
    try{
        const currUser = await user.findOne({where: {
            email: req.body.email,
            password: req.body.password,
        }})
        if(currUser){
            res.status(200).json({
                "user": currUser
            })
        }
        if(currUser === null){
            res.status(422).json({
                "field":"password",
                "message":"Wrong email or password"
            })
        }

        console.log(currUser);
    }catch(e) {
        console.log(e);
    }
})


module.exports = router;