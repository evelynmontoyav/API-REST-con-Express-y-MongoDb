const express = require ('express');
const app = express()
const port = process.env.PORT || 4000
// importar rutas
const studentsRouter = require('./routes/students')

// Middlewares
app.use(express.json())

//Rutas
app.use("/students", studentsRouter)

// Escuchando el puerto
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})
