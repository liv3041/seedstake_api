const mongoose = require("mongoose");
const validator = require("validator");

// create startup scehma
const startupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
   },
    image:{
    type:String,
    required:true,
    trim:true,
    validate:{
        validator:(value)=>{
            return validator.isURL(value);
        },
        message: "Invalid image URL"
    }
 },
 tagline:{
  type:String,
  required:true,
  trim:true
},
description:{
    type:String,
    required:true,
    trim:true
},
datecreated:Date,
dateUpdated:Date
});

// model define
const startup = new mongoose.model("startup",startupSchema);
module.exports = startup;