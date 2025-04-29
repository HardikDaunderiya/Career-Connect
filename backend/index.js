import express from "express";
import cookieParser from "cookie-parser";
<<<<<<< HEAD
=======
import cors from "cors";
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
<<<<<<< HEAD
import cors from "cors";
=======
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb

dotenv.config({});

const app = express();

<<<<<<< HEAD
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
=======
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
//API'S
=======

// api's
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

<<<<<<< HEAD
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on ${PORT}`);
});
=======


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})
>>>>>>> 034de4752cfcdbd25d6d8c096d4edf920a8e0fcb
