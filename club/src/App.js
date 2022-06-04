import React, { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Socio from './components/Socio';

function App() {

    //Creamos un state vacío para los asociados
    const [asociados, editarAsociados] = useState([]);

    //Funcion que toma el socio nuevo y lo mete en la lista de asociados
    const agregarSocio = (socio) => {
        editarAsociados([
            ...asociados,
            socio
        ])
    };

    //Función para borrar socios de la lista
    const borrarSocio = (id) => {
        const nuevaListaDeSocios = asociados.filter(socio => socio.id !== id);
        editarAsociados(nuevaListaDeSocios);
    };


    return (
    <Fragment>
      <Container>
          <Row>
            <Col>Club social y deportivo</Col>
          </Row>
          <Row>
            <Col>
                <Formulario
                    agregarSocio={agregarSocio}
                />
            </Col>
            <Col>Lista de socios
            {
                asociados.map(
                    socio =>
                        <Socio
                            socio={socio}
                            key={socio.id}
                            borrarSocio={borrarSocio}
                        />
                )
            }
            </Col>
          </Row>
      </Container>
    </Fragment>
  );
}

export default App;
