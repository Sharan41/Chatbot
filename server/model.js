const mongoose = require('mongoose');

const UserSchema =   mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"Please enter first name"]
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenum: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    
},
{
    timestamps:true
}

);
const  User=mongoose.model('user',UserSchema); 
module.exports=User;
