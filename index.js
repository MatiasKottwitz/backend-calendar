const express = require('express');

//Uso de Variables de entorno:
require('dotenv').config();
console.log(process.env);

// Creacion del Servidor de Express
const app = express();

app.use(express.static('public'));

//Lectura de datos

app.use(express.json()); //Recibe datos del Json de postman

//Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones del servidor.

app.listen(process.env.PORT, () =>{
    console.log(`Server corriendo en el puerto ${process.env.PORT}`);
})