import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
import { getCorsOrigins } from './utils/corsUtils.js'

const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())

// Get allowed origins
const allowedOrigins = getCorsOrigins()

// CORS configuration with dynamic origin checking
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) {
            return callback(null, true)
        }
        
        // Check if origin is in allowed list
        if (allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            console.warn(`❌ CORS blocked origin: ${origin}`)
            console.log('✅ Allowed origins:', allowedOrigins)
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res)=> res.send("API Working"))

app.listen(PORT, ()=> console.log("Server running on port " + PORT));