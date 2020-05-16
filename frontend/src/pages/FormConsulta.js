import React, {useState} from 'react';
import './FormConsulta.css';
import {Form, Button} from 'react-bootstrap';

export default (props) =>{

    const [ consultaFecha, setConsultaFecha ] = useState('')

    const [ consultaSemanalOcasional, setConsultaSemanalOcasional ] = useState('')

    const [ consultaPsicologo, setConsultaPsicologo ] = useState('')

    const [ consultaTipoDeConsulta, setConsultaTipoDeConsulta ] = useState('')

    const handleConsultaFechaChange = (event) =>{
        setConsultaFecha( event.target.value );
    }

    const handleConsultaSemanalOcasional = (event) =>{
        setConsultaSemanalOcasional( event.target.value );
        console.log( event.target.value );
    }

    const handleConsultaPsicologo = (event) =>{
        setConsultaPsicologo( event.target.value );
        console.log( event.target.value );
    }

    const handleConsultaTipoDeConsulta = (event) =>{
        setConsultaTipoDeConsulta( event.target.value );
        console.log( event.target.value );
    }

    const handleSave = () =>{

        const formData = new FormData();

        formData.append('consultaFecha', consultaFecha);
        formData.append('consultaSemanalOcasional', consultaSemanalOcasional);
        formData.append('consultaPsicologo', consultaPsicologo);
        formData.append('consultaTipoDeConsulta', consultaTipoDeConsulta);


        fetch('http://localhost:8888/consultas',{
            method : 'POST',
            body : formData,
            credentials : 'include'
        }
        ).then( response => response.json() )
         .then( data => {
             
                if ( data.status === 'ok'){
                    alert(data.message);
                    props.onConsultaSaved(data.message);
                }
                else{
                    alert(data.message);
                }
            }
        ).catch( error =>{
                console.log('Error');
            }
        )

    }

    return(
        <>
            <div className="formulario">
                <Form className="m-5">

                    <h1>Agendar una consulta</h1>

                    <Form.Group>
                        <Form.Label for="fecha">Fecha y hora</Form.Label> 
                        <Form.Control required="required"
                               type="datetime-local"
                               value={consultaFecha}
                               onChange={handleConsultaFechaChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">

                        <Form.Label>¿La consulta es ocasional o semanal?</Form.Label>

                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaSemanalOcasional} 
                                                  value={consultaSemanalOcasional} 
                        >   
                            <option>-Seleccione-</option>
                            <option value="1">Semanal</option>
                            <option value="0">Ocasional</option>
                        </Form.Control>

                        <span className="form-text text-muted">Si la consulta es una sola seleccione ocasional, si la consulta es una vez por semana seleccione semanal.</span>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect2">

                        <Form.Label>Psicólogo</Form.Label>

                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaPsicologo}
                                                  value={consultaPsicologo}
                        >
                            <option>-Seleccione-</option>
                            <option value="1">Martin</option>
                        </Form.Control>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect3">
                        <Form.Label>Modo de consulta</Form.Label>
                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaTipoDeConsulta}
                                                  value={consultaTipoDeConsulta}
                        >
                            <option>-Seleccione-</option>
                            <option value="1">Skype</option>
                        </Form.Control>
                    </Form.Group>


                    <Button onClick={ handleSave } 
                            variant="primary" 
                            type="submit"
                    >
                        Agendar consulta
                    </Button>
              
                </Form>
            </div>
        </>
    )
}