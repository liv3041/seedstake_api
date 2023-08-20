
const { error } = require("console");
const startup = require("../models/startupSchema");
const moment = require("moment");
const { start } = require("repl");

exports.startuppost = async(req,res)=>{
//    console.log(req.body);
     const{name, image, tagline, description}=req.body;

     if(!name || !image || !tagline || !description){
        res.status(400).json({error:"All input Is required"});

     }
     try {
        // existing startup
        const prestartup = await startup.findOne({name:name});
        if(prestartup){
            res.status(400).json({error:"This startup already exist in database"});

        }else{
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
            const startupData = new startup({
            name, image, tagline, description,datecreated:dateCreate
        });
    
        await startupData.save();
        res.status(200).json(startupData);
    }
     } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
     }

}

// get all startup
exports.getStartup = async(req,res)=>{
    try {
        const startupData = await startup.find();
        res.status(200).json(startupData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
        
    }
}

// get single startup
exports.getSinglestartup = async(req,res)=>{
    const {id}=req.params;
    try {
        const singlestartupData = await startup.findOne({_id:id});
        res.status(200).json(singlestartupData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}

// delete startup

exports.deleteStartup = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteStartupData = await startup.findByIdAndDelete({_id:id});
        res.status(200).json(deleteStartupData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
}


exports.updateStartup = async(req,res)=>{
    const {id} = req.params;
    const{name, image, tagline, description}=req.body;
    try {
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        const updateStartupData = await startup.findByIdAndUpdate({_id:id},{
            name, image, tagline, description,dateUpdated:dateUpdate
        },{new:true});
        await updateStartupData.save();
        res.status(200).json(updateStartupData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error");
    }
        
    }
