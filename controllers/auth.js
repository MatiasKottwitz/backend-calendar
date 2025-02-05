const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require ('../models/Usuario');
// const { validationResult } = require('express-validator');

const crearUsuario = async(req, res= response) =>{
    
    const {email, password} = req.body
    try {
        
        let usuario = await Usuario.findOne({ email });
        
        if (usuario){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con el mismo correo'
            })
        }

        //Instancia del Usuario:
         usuario = new Usuario(req.body);

        //Encriptacion de la contraseña:
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        //grabar en la base de datos:
        await usuario.save();

        res.status(201).json({
            ok:true,
            msg: 'Usuario registrado',
            uid: usuario.id,
            name: usuario.name,
            lastname: usuario.lastname
        })

    } catch (error) {
        console.log('El Usuario esta duplicado...')
        res.status(500).json({
            ok:false,
            msg: 'Usuario Duplicado...'
        })

    }
    
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