const mongoose = require("mongoose")
var User = mongoose.model('Useer',{
    name:{
        type:String
    },
    phone : {
        type:Number
    },
    email:{
        type:String
    },
    location:{
        type:String
    },
    password:{
        type:String
    }  
});

module.exports = {User}