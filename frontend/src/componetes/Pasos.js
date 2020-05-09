import React from 'react';
import './Pasos.css';
import {Accordion, Card, Button} from 'react-bootstrap';

export default () =>{
    return(
        <>
            <div className="listadepasos">
                <div className="texto">
                <h1>Pasos a seguir</h1>
                <p>Empieza ya tu sesión con uno de los ​psicólogos online de Psonríe​ y además de sentirte mejor, ahorrarás tiempo y dinero. Solo tienes que seguir estos sencillos pasos:</p>
                </div>
                <Accordion defaultActiveKey="0" className="pasos" >
                    <Card className="mb-3 effect1" bg="secondary" text="white">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Paso 1
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Crea tu perfil y rellena tus datos</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="mb-3 effect1" bg="secondary">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Paso 2
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Primero tendremos una conversación contigo, para poder entender bien tu situación y ver cuál es la mejor manera de ayudarte.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="mb-3 effect1" bg="secondary">
                        <Accordion.Toggle  as={Card.Header} eventKey="2">
                            Paso 3
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Elige el plan que mejor se adapte a tus necesidades. Dispones de sesiones desde 24€.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                
            </div>
        </>
    )
}