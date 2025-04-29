import mongoose from "mongoose";

<<<<<<< HEAD
const applicationSchema=new mongoose.Schema({
=======
const applicationSchema = new mongoose.Schema({
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
<<<<<<< HEAD
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application=mongoose.model("Application",applicationSchema);
=======
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
