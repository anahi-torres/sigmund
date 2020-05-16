import React, {useState} from 'react';
import './App.css';
import NavSuperior from './layoutit/NavSuperior';
import NavLateral from './layoutit/NavLateral';
import Chat from './layoutit/Chat';
import CarouselComentarios from './componetes/CarouselComentarios';
import PerfilPaciente from './pages/PerfilPaciente';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import FormConsulta from './pages/FormConsulta';
import ListadoConsultas from './pages/ListadoConsultas';
import PerfilPsicologo from './pages/PerfilPsicologo';
import Administracion from './pages/Administracion';
import Pasos from './componetes/Pasos';
import QuienesSomos from './componetes/QuienesSomos';

function App() {

  const [usuario, setUsuario] = useState(null);

  const onLoginSuccess = (loggedUser) =>{
    setUsuario(loggedUser)
  }

  const onLogout = () =>{
    let url = 'http://localhost:8888/auth';

    fetch(url, {
                  method : 'DELETE',
                  credentials: 'include'
               }
    ).then( response => response.json()
    ).then(
        data => {
                    setUsuario(null);
                }
    )
  }

  return (
    <>
      <Router>
        <NavSuperior user={usuario} 
                     handleLoginSuccess={onLoginSuccess}
                     handleLogout={onLogout}
        />
        <NavLateral user={usuario} />
        <Chat />

        <Switch>
          <div className="main-container">

            <Route exact path="/" 
                children={
                            <>
                                <QuienesSomos />
                                <Pasos />
                                <CarouselComentarios />
                            </>
                            }
            />

            { usuario &&

              <>
                <Route path="/perfil" 
                        children={ <PerfilPaciente user={usuario} /> }
                />
                <Route path="/consulta"component={FormConsulta} />

                <Route path="/consultas"component={ListadoConsultas} />

                <Route path="/psicologo"component={PerfilPsicologo} />

                <Route path="/administracion"component={Administracion} />
              </>

            }

            <Redirect to={ { pathname: '/' } } />

          </div>
        </Switch>

      </Router>
    </>
  );
}

export default App;
