
import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';

//Connecting to DB
connectDB();


const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.status(201).json({message:"Hello from Food Delivery Application Backend"})
})

//api endPoint reRouting
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));


//Initiating the Backend
app.listen(PORT,()=>{
    console.log(`The Backend started at Port ${PORT}`);
})

// mongodb+srv://praveen:db123@cluster0.psrhxtr.mongodb.net/?

// mongodb+srv://praveen:db123@cluster0.psrhxtr.mongodb.net/?appName=Cluster0