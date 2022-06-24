const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Username:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword:{
        type : String,
        required: true
    }
})

const User = new mongoose.model('User', UsersSchema);
module.exports = User;