/**
 * Parse CORS origins from environment variables
 * Supports comma-separated string format in CORS_URLS
 * Also includes CLIENT_URL and CLIENT_LOCAL if provided
 * 
 * @returns {string[]} Array of allowed CORS origins
 */
export const getCorsOrigins = () => {
    const origins = []
    
    // Parse CORS_URLS from env (comma-separated string)
    if (process.env.CORS_URLS) {
        origins.push(...process.env.CORS_URLS.split(',').map(url => url.trim()).filter(Boolean))
    }
    
    // Add CLIENT_URL if provided
    if (process.env.CLIENT_URL) {
        origins.push(process.env.CLIENT_URL.trim())
    }
    
    // Add CLIENT_LOCAL if provided (for local development)
    if (process.env.CLIENT_LOCAL) {
        origins.push(process.env.CLIENT_LOCAL.trim())
    }
    
    // Remove duplicates and filter out empty values
    const finalOrigins = [...new Set(origins.filter(Boolean))]
    
    // Log for debugging (remove in production if needed)
    if (finalOrigins.length === 0) {
        console.warn('⚠️  WARNING: No CORS origins configured! Set CORS_URLS, CLIENT_URL, or CLIENT_LOCAL environment variables.')
    } else {
        console.log('✅ CORS origins configured:', finalOrigins)
    }
    
    return finalOrigins
}

