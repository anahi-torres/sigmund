import React from 'react';
import './Chat.css';
import {Dropdown} from 'react-bootstrap';

export default () =>{
    return(
        <>
            <Dropdown>

                    <Dropdown.Toggle alignRight variant="info" className="chat redondo m-4" id="dropdown-basic">Chat</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>¿En qué te puedo ayudar?</Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item>:)</Dropdown.Item> 

                    </Dropdown.Menu>

            </Dropdown>
        </>
    )
}
