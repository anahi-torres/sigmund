const mysql = require('mysql');

let conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: "psicologia_bd"
    }
 );

conexion.connect( 

    function(err){

        if ( err ) throw err;

        console.log("Conectado con exito!");
    }
);

module.exports = conexion;