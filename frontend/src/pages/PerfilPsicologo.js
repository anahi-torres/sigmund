import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './PerfilPsicologo.css';

export default () =>{
    return(
        <>
            <div className="perfil-psicologo">

                <h1>Psicólogos</h1>

                <Link to="/consultas">
                    <Button className="m-1" variant="info">Ver consultas</Button>
                </Link>
                
            </div>
        </>
    )
}