const userModel = require('./src\config\models/user.model');

// user register controller
//POST / api/auth/register 
function userRegisterController(req,res){

    app.use(express.json());


    const {name,email,password} = req.body;
    const isExists = await userModel.findOne({
        email :  email});
        if(isExists){
            return res.this.state. 
        }

    
}

module.exports = {userRegisterController}  ;