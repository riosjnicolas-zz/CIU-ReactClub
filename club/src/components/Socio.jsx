import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge, Button } from 'react-bootstrap';

const Socio = ({socio, borrarSocio}) => {
    return (

        <Fragment>
            <Badge bg="secondary">
                <p>Socio: {socio.id}</p>
                <p>Nombre: {socio.nombre}</p>
                <p>DNI: {socio.dni}</p>
                <Button
                    variant="light"
                    onClick={() => borrarSocio(socio.id)}
                >Borrar socio</Button>
            </Badge>
        </Fragment>
        
        );
}

export default Socio;