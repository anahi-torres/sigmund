import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './PerfilPaciente.css';

export default () =>{
    return(
        <>
            <div className="perfil-paciente">

                <h1>Perfil del paciente</h1>

                <Link to="/consulta">
                    <Button className="m-1" variant="info">Agendar una consulta</Button>
                </Link>
                
            </div>
        </>
    )
}