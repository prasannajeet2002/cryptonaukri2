const mongoose = require('mongoose');

const CompaniesSchema = new mongoose.Schema({
    CompanyName:{
        type : String,
        required : true
    },
    CompanyEmail : {
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

const Company = new mongoose.model('Company', CompaniesSchema);
module.exports  = Company;