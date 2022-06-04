import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregarSocio}) => {

    //Creo un socio vacío y lo inicializamos con useState

    const [socio, editarSocio] = useState({
        nombre: "",
        dni: ""
    });

    //Creo otro state para el error de validación del formulario

    const [error, setError] = useState(false);

    //Extraer los valores de socio

    const { nombre, dni } = socio;

    //Recibimos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value,
        })
    }

    //Función para cuando se envía el formulario
    const submitForm = (e) => {
        e.preventDefault();

        //Validar el formulario
        if (nombre.trim() === '' || dni.trim() === '') {
            setError(true);
            return;
        }

        //Quitar el mensaje de error
        setError(false);

        //Poner un id
        socio.id = uuidv4();
        console.log(socio);

        //Generar el socio
        agregarSocio(socio);

        //Limpiar el formulario
        editarSocio({
            nombre: "",
            dni:""
        })
    };

    return (

        <Fragment>

            <Form
                onSubmit={submitForm}
            >
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre completo"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Sin puntos ni espacios"
                        name="dni"
                        onChange={handleChange}
                        value={dni}
                    />
                </Form.Group>
                
                <Button
                    variant="primary"
                    type="submit">
                    Ingresar Socio
                </Button>
            </Form>
            {
                error
                    ? <h4>Completa todos los campos</h4>
                    : null
            }
        </Fragment>

    );
}

export default Formulario;