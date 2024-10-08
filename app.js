import express, { json } from 'express' // Importamos express
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

// import movies from './movies.json' with { type: 'json' } SI FUNCIONA PERO AL MOMENTO QUE SE ESTABA GRABANDO LA CLASE NO SERVIA
// PRIMERA FORMA DE CARGAR ARCHIVOS JSON
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // Deshabilita la cabecera 'X-Powered-By'

app.use('/movies', moviesRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/movies`)
})