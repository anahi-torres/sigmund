const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/', (req, res)=>{
    conexion.query("SELECT * FROM paciente",
        function(err, result, fields){

            if ( err ) throw err;

            res.json(result);
            }
        );
});

router.get("/:id", (req, res) => {
    conexion.query("SELECT * FROM paciente WHERE id_paciente=" + req.params.id,
            function(err, result, fields){

                if ( err ) throw err;

                res.json(result);
            }
        );
} );


router.post("/", (req, res) => {

    console.log(req.query);

    let consulta = `INSERT INTO paciente(nombre_paciente, dni_paciente, motivoconsulta_pac) 
                    VALUES( "${req.query.nombre}", 
                            ${req.query.dni}, 
                            "${req.query.motivoconsulta}"
                            )`;

    conexion.query(consulta,
            function(err, result, fields){
                if ( err ) throw err;

                res.send("El paciente se agregó!");
                //res.json(result);
            }
        );
} );

module.exports = router;