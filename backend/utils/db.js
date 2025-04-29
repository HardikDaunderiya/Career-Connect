import mongoose from "mongoose";

<<<<<<< HEAD
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB is Connected Successfully")
=======
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
    } catch (error) {
        console.log(error);
    }
}
<<<<<<< HEAD
export default connectDB; 
=======
export default connectDB;
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
