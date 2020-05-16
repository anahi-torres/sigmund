import React from 'react';
import './PerfilPaciente.css';
import ListadoConsultas from './ListadoConsultas';

export default (props) =>{
    return(
        <>
            <div className="perfil-paciente">

                <h1>Perfil del paciente</h1>

                <ListadoConsultas type="misconsultas"
                                  user={ props.user }
                />
                
            </div>
        </>
    )
}