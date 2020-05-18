import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './PerfilPsicologo.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default () =>{

    const [ consultasFormateadas, setConsultasFormateadas ] = useState([])

    const localizer = momentLocalizer(moment) // or globalizeLocalizer

    let allViews = Object.keys(Views).map(k => Views[k])

    const formateoConsulta = (consulta) =>{
        let start = new Date(consulta.fecha_consulta);
        let end =  new Date(consulta.fecha_consulta).setHours(start.getHours() + 1);
        return {
                    title: "Consulta - Paciente: " + consulta.id_paciente,
                    start: start,
                    end: end
               }
    }

    useEffect( ()=>{

            fetch(
                `http://localhost:8888/consultas`
            ).then(
                response => response.json()
            ).then(
                data => {
                    let consultas = data.map(formateoConsulta)
                    setConsultasFormateadas(consultas)
                }
            )
        }
    )

    return(
        <>
            <div className="perfil-psicologo">

                <h1>Psicólogos</h1>

                <Link to="/consultas">
                    <Button className="m-1" variant="info">Ver consultas</Button>
                </Link>
                
                <div>
                    <Calendar
                    localizer={localizer}
                    views={allViews}
                    events={ consultasFormateadas }
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date()}
                    style={{ height: 500 }}
                    />
                </div>
                
            </div>
        </>
    )
}