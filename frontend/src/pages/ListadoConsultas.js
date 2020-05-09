import React, {useState, useEffect} from 'react';
import './ListadoConsultas.css';

export default () =>{

    const [ consultas, setConsultas ] = useState([])
    
    useEffect( ()=>{
                    fetch('http://localhost:8888/consultas').then(
                        response => response.json()
                    ).then(
                        data => {
                            setConsultas(data)
                            console.log(data);
                        }
                    )
               }, []
    )

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
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modal-paciente">Nuevo</button>
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
        </>
    )
}