import React from 'react';
import './QuienesSomos.css';
import {Col, Row, Container, Button} from 'react-bootstrap';
import logo from '../images/home.svg';

export default () =>{
    return(
        <>
            <div className="somdra fondo-quienes-somos">
        
                <Container className="mt-4">
                <Row className="d-flex justify-content-center align-items-center">

                    <Col xs={10} md={6} xl={6} className=" text-center text-md-left">
                    <h1 className='font-weight-bolder display-3 text-light mobile'>
                        Tu psicólogo online
                    </h1>
                    <p className="text-light h5">
                        Sigmund es el primer servicio de orientación psicológica online, 
                        especializado en problemas del día a día. Habla con un psicólogo profesional cuando realmente lo necesitas.
                    </p>
                    <Button variant="info">Learn more</Button>
                    </Col>

                    <Col xs={10} md={6} xl={6} className="">
                    <img src={logo} className="img-fluid" alt="imagen de home" />
                    </Col>

                </Row>
                </Container>

            </div>
        </>
    )
}