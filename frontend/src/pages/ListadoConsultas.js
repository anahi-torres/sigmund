import React, {useState, useEffect} from 'react';
import './ListadoConsultas.css';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import ConsultaEditorModal from '../componetes/ConsultaEditorModal';

export default (props) =>{

    const [ consultas, setConsultas ] = useState([])

    const [ showConsultaEditorModal, setShowConsultaModalEditModal ] = useState(false);

    const handleHideConsultaEditorModal = () =>{
        setShowConsultaModalEditModal(false);
    }

    const onShowConsultaEditorModal = () =>{
        setShowConsultaModalEditModal(true);
    }

    const handleConsultaSaved = ()=> {
        setShowConsultaModalEditModal(false);
    }

    let endpoint = 'consultas';

    if ( props.user && props.type === 'misconsultas'){
        endpoint = 'consultas/user/' + props.user.id;
    }

    const cargarListadoConsultas = ()=>{

        fetch(
            `http://localhost:8888/${endpoint}`
        ).then(
            response => response.json()
        ).then(
            data => {
                setConsultas(data)
                console.log(data);
            }
        )
   }
    
    useEffect( cargarListadoConsultas, [] );

    return(
        <>
            <div className="listado-consultas">
                <div>

                    <div class="row">
                        <div class="col">
                            <h1>Listado de consultas</h1>
                        </div>
                    </div>

                    <div class="row my-3">
                        <div class="col">
                            <Button onClick={onShowConsultaEditorModal}>Nueva consulta</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <table class="table">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Semanal</th>
                                        <th>Paciente</th>
                                        <th>Psicólogo</th>
                                        <th>Tipo de consulta</th>
                                    </tr>
                                </thead>

                                <tbody id="listado-paciente">{ 
                                                        consultas.map( consulta =>{
                                                                return(
                                                                    <tr>
                                                                        <td>{ consulta.id_consulta }</td>
                                                                        <td>{ consulta.fecha_consulta }</td>
                                                                        <td>{ consulta.semanal_consulta }</td>
                                                                        <td>{ consulta.id_paciente }</td>
                                                                        <td>{ consulta.id_psicologo }</td>
                                                                        <td>{ consulta.id_tipodeconsulta }</td>
                                                                        <Button variant="outline-secondary" className="mr-1">
                                                                            <FontAwesomeIcon color="green" icon={faEdit} />
                                                                        </Button>
                                                                        <Button variant="outline-secondary">
                                                                            <FontAwesomeIcon color="red" icon={faTrash} />
                                                                        </Button>
                                                                    </tr>
                                                                )
                                                            }
                                                        ) 
                                                            }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <ConsultaEditorModal show={showConsultaEditorModal}
                                 handleHide={handleHideConsultaEditorModal}
                                 onConsultaSaved={handleConsultaSaved}
            />
        </>
    )
}