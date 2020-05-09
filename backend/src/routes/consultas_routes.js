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

    console.log(req.query);

    let consulta = `INSERT INTO consulta(fecha_consulta, semanal_consulta, id_paciente, id_psicologo, id_tipodeconsulta) 
                    VALUES( '${req.query.fecha}', 
                            ${req.query.semanal},
                            ${req.query.paciente},
                            ${req.query.psicologo},
                            ${req.query.tipodeconsulta}
                            )`;

    conexion.query(consulta,
            function(err, result, fields){
                if ( err ) throw err;

                //res.send("La consulta se agregó!");
                res.json(result);
            }
        );
} );

module.exports = router;