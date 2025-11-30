/**
 * Parse CORS origins from environment variables
 * Supports both JSON array format and comma-separated string format in CORS_URLS
 * Also includes CLIENT_URL and CLIENT_LOCAL if provided
 * 
 * @returns {string[]} Array of allowed CORS origins
 */
export const getCorsOrigins = () => {
    const origins = []
    
    // Parse CORS_URLS from env (supports both JSON array and comma-separated string)
    if (process.env.CORS_URLS) {
        try {
            // Try parsing as JSON array first
            const parsed = JSON.parse(process.env.CORS_URLS)
            if (Array.isArray(parsed)) {
                origins.push(...parsed.map(url => String(url).trim()).filter(Boolean))
            } else {
                // If it's a single string value, add it
                origins.push(String(parsed).trim())
            }
        } catch {
            // If not JSON, treat as comma-separated string
            origins.push(...process.env.CORS_URLS.split(',').map(url => url.trim().replace(/^["\[\]]+|["\[\]]+$/g, '')).filter(Boolean))
        }
    }
    
    // Add CLIENT_URL if provided
    if (process.env.CLIENT_URL) {
        origins.push(process.env.CLIENT_URL.trim())
    }
    
    // Add CLIENT_LOCAL if provided (for local development)
    if (process.env.CLIENT_LOCAL) {
        origins.push(process.env.CLIENT_LOCAL.trim())
    }
    
    // Clean up origins: remove quotes, brackets, and filter out invalid URLs
    const cleanedOrigins = origins
        .map(url => url.trim().replace(/^["\[\]]+|["\[\]]+$/g, '').trim())
        .filter(url => {
            // Filter out invalid URLs and non-URL strings
            if (!url) return false
            // Remove any that look like API endpoints (they shouldn't be in CORS origins)
            if (url.includes('/api/') || url.includes('/text-to-image/v1')) return false
            return true
        })
    
    // Remove duplicates and filter out empty values
    const finalOrigins = [...new Set(cleanedOrigins.filter(Boolean))]
    
    // Log for debugging (remove in production if needed)
    if (finalOrigins.length === 0) {
        console.warn('⚠️  WARNING: No CORS origins configured! Set CORS_URLS, CLIENT_URL, or CLIENT_LOCAL environment variables.')
    } else {
        console.log('✅ CORS origins configured:', finalOrigins)
    }
    
    return finalOrigins
}

