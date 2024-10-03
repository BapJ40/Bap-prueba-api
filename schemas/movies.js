const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'El título es requerido',
        required_error: 'El título es requerido',
    }),
    year: z.number().int().positive().min(1900).max(2025),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message: 'La URL de la imagen no es válida',
    }),
    genre: z.array(
        z.enum(['Action','Adventure','Comedy','Drama','Fantasy','History','Horror','Thriller','Sci-Fi']),
        {
            required_error: 'Movie genre require',
            invalid_type_error: 'Movie genre require'
        }
    ),
})

function validateMovie(input) {
    return movieSchema.safeParse(input)
}

function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}