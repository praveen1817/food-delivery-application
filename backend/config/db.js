import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Db Connected Successfully");
    })
}


// mongodb+srv://praveen:db123@cluster0.psrhxtr.mongodb.net/?