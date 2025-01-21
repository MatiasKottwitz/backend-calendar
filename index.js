const express = require('express');


// Creacion del Servidor de Express
const app = express();

// //Rutas
// app.get('/', (req, res) => {
//     console.log('Se requiere /');
//     res.json({
//         ok:true
//     })
// })

app.use(express.static('public'));

// Escuchar peticiones del servidor.

app.listen(4000, () =>{
    console.log(`Server corriendo en el puerto ${4000}`);
})