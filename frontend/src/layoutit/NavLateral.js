import React from 'react';
import logo from '../images/logo.png';
import './NavLateral.css';
import {Link} from 'react-router-dom';

export default (props) =>{
    return(
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-transparent nav-rigth">

                <div class="collapse navbar-collapse nav" id="navbarTogglerDemo01">

                    <div class="barra-lateral">
                        <div>
                            <img id="imagenleon" src={logo} alt="León" />
                        </div>

                        <div class="btn-group" role="group" aria-label="Basic example">
                        <nav>
                            <ul class="lista">

                                <Link to="/">
                                <li>Home</li>
                                </Link>

                                { props.user &&
                                <>
                                <Link to="/perfil">
                                    <li>Mi perfil</li>
                                </Link>
                            
                                <Link to="/consulta">
                                    <li>Agendar una consulta</li>
                                </Link>
                                </>
                                }

                                <Link to="/psicologo">
                                    <li>Nuestro psicólogos</li>
                                </Link>
                                
                                <li>Contacto</li>
                            </ul>
                        </nav>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}