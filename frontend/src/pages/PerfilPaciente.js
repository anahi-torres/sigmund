import React from 'react';
import './PerfilPaciente.css';
import ListadoConsultas from './ListadoConsultas';
import Calendario from '../componetes/Calendario';

export default (props) =>{
    return(
        <>
            <div className="perfil-paciente">

                <h1>Perfil del paciente</h1>

                <ListadoConsultas type="misconsultas"
                                  user={ props.user }
                />

                <Calendario type='paciente' user={props.user}/>
                
            </div>
        </>
    )
}