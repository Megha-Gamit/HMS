const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
       
    },

    last_name:{
        type:String,
        required:true,
       
    },

    father_name:{
        type:String,
        required:true,
       
    },

    mother_name:{
        type:String,
        required:true,
       
    },


    state:{
        type:String,
        required:true,
       
    },

    city:{
        type:String,
        required:true,
       
    },

    enrollment_no:{
        type:String,
        required:true,
       
    },
  
    gender:{
        type:String,
        required:true,
    },

    dob:{
        type:Date,
        default:Date.now
    },

    s_contact:{
        type:Number,
        required:true,
        
    },

    parent_contact:{
        type:Number,
        required:true,
        
    },
    course:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        }
    },

    password:{
        type:String,
        required:true,
    },



});

const studentModel = mongoose.model('students',studentSchema);
module.exports = studentModel;