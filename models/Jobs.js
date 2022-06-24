const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
    job:{
        type : String,
        required : true
    },
    eligibility : {
        type : String,
        required : true
    },
    requirement : {
        type : String,
        required : true
    },
    responsibilities:{
        type : String,
        required: true
    }
})

const Job = new mongoose.model('Job', JobsSchema);
module.exports = Job;