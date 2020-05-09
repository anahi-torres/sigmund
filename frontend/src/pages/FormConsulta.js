import React from 'react';
import './FormConsulta.css';

export default () =>{
    return(
        <>
            <div className="formulario">
                <form className="m-5">
                    <h1>Agendar una consulta</h1>
                    <div class="form-group">
                        <label for="fecha">Fecha y hora</label> 
                        <input id="fecha" name="fecha" placeholder="xxxx/xx/xx xx:xx" type="text" required="required" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="semana-ocasional">¿La consulta es ocasional o semanal?</label> 
                        <div>
                        <select id="semana-ocasional" name="semana-ocasional" aria-describedby="semana-ocasionalHelpBlock" required="required" class="custom-select">
                            <option value="1">Semanal</option>
                            <option value="1">Ocasional</option>
                        </select> 
                        <span id="semana-ocasionalHelpBlock" class="form-text text-muted">Si la consulta es una sola seleccione ocasional, si la consulta es una vez por semana seleccione semanal.</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="paciente">Paciente</label> 
                        <div>
                        <select id="paciente" name="paciente" class="custom-select">
                            <option value="1">Laura</option>
                            <option value="5">postman7</option>
                            <option value="8">postman7</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="psicologo">Psicólogo</label> 
                        <div>
                        <select id="psicologo" name="psicologo" class="custom-select">
                            <option value="1">Martin</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="tipodeconsulta">Modo de consulta</label> 
                        <div>
                        <select id="tipodeconsulta" name="tipodeconsulta" class="custom-select">
                            <option value="1">Skype</option>
                        </select>
                        </div>
                    </div> 
                    <div class="form-group">
                        <button name="submit" type="submit" class="btn btn-primary">Agendar consulta</button>
                    </div>
                </form>
            </div>
        </>
    )
}