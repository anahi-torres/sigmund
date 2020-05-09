import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton';
import LoginModal from '../componetes/LoginModal';

export default (props) =>{

    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleShowLoginModal = () =>{
        setShowLoginModal(true);
    }

    const handleHideLoginModal = () =>{
        setShowLoginModal(false);
    }

    return (
    <>

        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">

                { !props.user
                  ?
                    <>
                    <Button  variant="info" className="mr-1" onClick={handleShowLoginModal}>Registrarse</Button>
                    <Button variant="outline-info" onClick={handleShowLoginModal}>Iniciar sesión</Button>
                    </>
                  :
                    <>
                    <DropdownButton title={props.user.nombre} alignRight id="dropdown-basic-button" variant="info">
                        <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick={props.handleLogout}>
                            Cerrar sesión
                        </NavDropdown.Item> 
                    </DropdownButton>
                    </>
                }

                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <LoginModal show={showLoginModal} 
                    handleHide={handleHideLoginModal}
                    handleLoginSuccess={props.handleLoginSuccess}
        />
    </>
    );
}