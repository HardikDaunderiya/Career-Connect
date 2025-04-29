import mongoose from "mongoose";

<<<<<<< HEAD
const jobSchema= new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    requirements :[{
        type:String,
    }],
    salary :{
        type:Number,
        required:true,
=======
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
<<<<<<< HEAD
    location :{
        type:String,
        required:true
    },
    jobType :{
        type:String,
        required:true
    },
    position :{
        type:Number,
        required:true
    },
    company :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Application',
        },

    ],

},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema)
=======
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
