const ensureAuthenticated = require('../middleware/Auth');



const router = require('express').Router();



router.get('/', ensureAuthenticated, (req, res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price: "10000"
        },
        {
            name: "TV",
            price:"20500"
        }
    ])
})


module.exports = router;