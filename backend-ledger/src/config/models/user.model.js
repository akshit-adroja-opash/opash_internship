const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

    

    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    name: {
        type: String,
        required: [true,"name is required"]
    },
    password: {
        type: String,
        required: [true,"password is required" ],
        minlength: [6,"password must be at least 6 characters"],
        select : false
    },
},
{
    timestamps: true
})
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
    this.password = hash
    return next();
    
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password);
 
}

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;


    
    