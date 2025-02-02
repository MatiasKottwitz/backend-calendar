/*
    Rutas de Usuarios  / Auth
    host + /api/auth
*/

const {Router} = require('express');   
const {check} = require('express-validator');


const router = Router();

const {crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const {validarCampos} = require('../middleware/validar-campos') 

//Rutas
router.post('/new',
    [
        //middlewares para validar datos
        check('name', 'el nombre es obligatorio').notEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password debe de ser mayor a 5 caracteres').isLength({min: 5}),
        validarCampos
    ], 
crearUsuario);

router.post('/',
    [
        check('email','Email obligatorio!').isEmail(),
        check('password', 'El password debe de tener caracteres').isLength({min:6, max:10}),
        validarCampos
    ]
,loginUsuario);

router.get('/renew',  revalidarToken);


module.exports = router;