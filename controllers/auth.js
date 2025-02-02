const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res= response) =>{
    
    const {name, lastname, email} = req.body


    //Validacion del usuario:


    res.status(201).json({
        ok:true,
        msg: 'Usuario registrado',
        user: [
            name,
            lastname,
            email
        ]
    })
}

const loginUsuario = (req, res= response) =>{
    
    const {email, password} = req.body

    res.json({
        ok:true,
        msg: 'Login Usuario',
        datosUser: [
            email,
            password
        ]
    })
}

const revalidarToken = (req, res= response) =>{
    res.json({
        ok:true,
        msg: 'renewtoken'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}