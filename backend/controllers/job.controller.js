<<<<<<< HEAD

import { Job } from "../models/job.model.js";

//for admin
export const postJob= async (req,res)=>{
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId }=req.body;
        const userId=req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message:"Something is missing.",
                success:false,
=======
import { Job } from "../models/job.model.js";

// admin post krega job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
<<<<<<< HEAD
            salary:Number(salary),
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId,
        });
        return res.status(201).json({
            message:"New Job Created Successfully.",
            job,
            success:true,
=======
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
        });
    } catch (error) {
        console.log(error);
    }
}
<<<<<<< HEAD
//for student 
export const getAllJobs= async(req,res)=>{
    try {
        const keyword= req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword, $options:"i"}},
                {description:{$regex:keyword, $options:"i"}},
            ]
        }
        const jobs =await Job.find(query).populate({
            path:"company"
        }).sort({ createdAt:-1});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not Found.",
                success:false
=======
// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
            })
        };
        return res.status(200).json({
            jobs,
<<<<<<< HEAD
            success:true,
        })
    } catch (error) {
        console.log(error);
    }

}
//for sstudent 
export const getJobById=async(req,res)=>{
    try {
        const jobId=req.params.id;
        const job= await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Jobs not Found.",
                success:false,
            })
        };
        return res.status(200).json({job,success:true});
    } catch (error) {
        console.log(error);
    }
}
//no. of job created by admin
export const getAdminJobs= async(req,res)=>{
    try {
        const adminId=req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not Found.",
                success:false,
            })
        };
        return res.status(200).json({
            jobs,
            success:true,
=======
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
        })
    } catch (error) {
        console.log(error);
    }
}
