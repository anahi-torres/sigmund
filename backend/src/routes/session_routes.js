const express = require('express');
const router = express.Router();

router.post('/', (req, res) =>{
        if ( req.body.user === 'pablo' && req.body.password === '123456'){
            
            req.session.user = 'pablo'; //para que el auth le pregunte si existe
            
            res.json(
                {
                    status     : 'ok',
                    message    : 'sesión iniciada',
                    loggedUser : {
                                    id     : 125,
                                    nombre : 'Pablo Garcia'
                                 }
                }
            )
        }else{
            res.json(
                {
                    status  : 'error',
                    message : 'Usuario y/o contraseña invalidos'
                }
            )
        }
    }
)

router.delete('/', (req, res) =>{
        req.session.destroy( err =>{
                if ( err ){
                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al cerrar la sesión'
                        }
                    )
                }else{
                    res.clearCookie('cloneml');
                    res.json(
                        {
                            status  : 'ok',
                            message : 'Sesión cerrada'
                        }
                    )
                }
            }
        )
    }
)

module.exports = router;