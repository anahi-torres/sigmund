const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/', (req, res)=>{
    conexion.query("SELECT * FROM consulta",
        function(err, result, fields){

            if ( err ) throw err;

            res.json(result);
            }
        );
});

router.post("/", (req, res) => {

    console.log(req.body);

    let sqlInsert = `INSERT INTO consulta(fecha_consulta, semanal_consulta, id_paciente, id_psicologo, id_tipodeconsulta) 
                    VALUES( '${req.body.consultaFecha}',
                            ${req.body.consultaSemanalOcasional},
                            ${req.session.userId},
                            ${req.body.consultaPsicologo},
                            ${req.body.consultaTipoDeConsulta}
                            )`;

    conexion.query(sqlInsert,
            function(err, result, fields){
                if ( err ) {

                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al agregar la consulta'
                        }
                    );
                }
                else{

                    res.json(
                        {
                            status  : 'ok',
                            message : 'La consulta se agregó!'
                        }
                    );
                }
            }
        );
} );

router.get('/user/:id', (req, res)=>{

        let sql = `
                    SELECT id_consulta, fecha_consulta, semanal_consulta, id_paciente, id_psicologo, id_tipodeconsulta
                    FROM consulta
                    WHERE id_paciente = ${req.params.id}
                  `;

        conexion.query(sql, function(err, result, fields){
                if ( err ) throw err;

                res.json(result);
            }
        )
    }
);

module.exports = router;