const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    email: { type: String, required: true },
    complainumber:{type:Number},
    category:{type:String,trim:true},
    complainttype:{type:String,trim:true},
    nature:{type:String,trim:true},
    details:{type:String,trim:true},
    finalstatus:{type:String,trim:true},
    regdate:{type:String},
    subcategory:{type:String,trim:true},
    state:{type:String,trim:true},
    file:{type:String},

    notprocess:{type:Number},
    process:{type:Number},
    closed:{type:Number},
    updated:{type:String}
    

});



const State = mongoose.model('Complain', complainSchema);

module.exports = State;
