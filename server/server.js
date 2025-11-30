import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

// Parse CORS origins from environment variable
const getCorsOrigins = () => {
    const origins = []
    
    // Parse CORS_URLS (comma-separated string)
    if (process.env.CORS_URLS) {
        origins.push(...process.env.CORS_URLS.split(',').map(url => url.trim()).filter(Boolean))
    }
    
    // Add CLIENT_URL if provided
    if (process.env.CLIENT_URL) {
        origins.push(process.env.CLIENT_URL.trim())
    }
    
    // Add CLIENT_LOCAL if provided
    if (process.env.CLIENT_LOCAL) {
        origins.push(process.env.CLIENT_LOCAL.trim())
    }
    
    return [...new Set(origins.filter(Boolean))]
}

const allowedOrigins = getCorsOrigins()

// Log configured origins on startup
console.log('🌐 CORS Configuration:')
if (allowedOrigins.length === 0) {
    console.warn('⚠️  WARNING: No CORS origins configured!')
    console.warn('   Set CORS_URLS, CLIENT_URL, or CLIENT_LOCAL environment variables')
} else {
    console.log('✅ Allowed CORS origins:')
    allowedOrigins.forEach(origin => console.log(`   - ${origin}`))
}

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true)
        }
        
        const normalizedOrigin = origin.replace(/\/$/, '')
        const normalizedAllowed = allowedOrigins.map(o => o.replace(/\/$/, ''))
        
        if (normalizedAllowed.includes(normalizedOrigin) || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            console.warn(`❌ CORS blocked origin: ${origin}`)
            console.log('   Allowed origins:', allowedOrigins)
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