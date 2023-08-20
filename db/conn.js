const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database connected")).catch((err)=>{
    console.log("Error:",err);
});