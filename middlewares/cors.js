import cors from 'cors'

export const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        const ACEPTED_ORIGINS = [
            'http://localhost:3000'
        ]

        if (ACEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('No permitido por CORS'))
    }
})