const mongoose = require('mongoose');

const JobApplication = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    job : {
        type : String,
        required : true
    },
    skills:{
        type : String,
        required: true
    },
    experience:{
        type: String,
    }
})

const Application = new mongoose.model('Application', JobApplication);
module.exports = Application;