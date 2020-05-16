import React from 'react';
import {Modal} from 'react-bootstrap';
import FormConsulta from '../pages/FormConsulta';

export default props =>{

    return(
        <Modal show={props.show} onHide={props.handleHide} >
            <Modal.Header closeButton>
        
            </Modal.Header>

            <Modal.Body>

                    <FormConsulta onConsultaSaved={props.onConsultaSaved}/>

            </Modal.Body>

        </Modal>
    )
}