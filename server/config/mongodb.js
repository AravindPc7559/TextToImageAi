import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected to imagify database")
    })

    mongoose.connection.on('error', (err)=>{
        console.error("Database connection error:", err)
    })

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'texttoimage'
        })
        console.log("MongoDB connection established successfully")
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message)
        throw error
    }
}

export default connectDB;