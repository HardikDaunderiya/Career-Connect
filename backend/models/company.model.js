import mongoose from "mongoose";

<<<<<<< HEAD
const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String//Url from cloud
=======
const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
    website:{
        type:String 
    },
    location:{
        type:String 
    },
    logo:{
        type:String // URL to company logo
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
<<<<<<< HEAD
        required:true,
    }
},{timestamps:true});
export const Company=mongoose.model("Company",companySchema); 
=======
        required:true
    }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
