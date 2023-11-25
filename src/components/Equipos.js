// Equipos.js
import '../App.css';
import React from 'react';
//import Layout from './components/Layout';
import { Link as ScrollLink, Element } from 'react-scroll';
import jugadora1 from "./fotos_team/Camila Mendoza 10.jpg";
import jugadora2 from "./fotos_team/Petra Schwartzman 15.jpg";
import jugadora3 from "./fotos_team/Isabella Vallebuona 12.jpg";
import jugadora4 from "./fotos_team/Gabriela Badilla 8.jpg";
import jugadora5 from "./fotos_team/Dominga Aylwin 7.jpg";
import jugadora6 from "./fotos_team/Pula Salinas 5.jpg";
import jugadora7 from "./fotos_team/Elisa Sandrock 9.jpg";
import jugadora8 from "./fotos_team/Paula Vallejos 13.jpg";
import jugadora9 from "./fotos_team/Karen Morales 6.jpg";
import jugadora10 from "./fotos_team/Beatriz Novoa 4.jpg";
import jugadora11 from "./fotos_team/Carlita Ruz 44.jpg";


import { Container, Card, Row, Col } from 'react-bootstrap';




const JugadorCard = ({ foto, numero, posicion, nombre, edad, estatura }) => (
 <Col xs={12} sm={6} md={4} lg={3} xl={3}>
   <Card className="mb-4" style={{ maxWidth: '250px', margin: '0 auto' }}>
     <Card.Img
       variant="top" src={foto} alt={`Jugador ${numero}`} style={{ width: '100%' }} />
     <Card.Body>
       <Card.Text className="text-center">
         {numero}. {nombre}
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <Card.Text className="text-center">
         <small style={{ color: "#C4202D"}}>Posición: {posicion}</small>
       </Card.Text>
       <Card.Text className="text-center">
         <small style={{ color: "#C4202D"}}>Edad: {edad} años</small>
       </Card.Text>
       <Card.Text className="text-center">
         <small style={{ color: "#C4202D"}}>Estatura: {estatura}</small>
       </Card.Text>
     </Card.Footer>
   </Card>
 </Col>
);






const Equipos = () => {
 const equipos = [
   {
     nombre: 'Liga A1 Mujeres',
     entrenador: 'Eduardo Guillaume',
     jugadores: [
       { foto: jugadora1,
       numero: 10,
       nombre: 'Camila Mendoza Fuster ',
       posicion: 'Central ',
       edad: 25,
       estatura: '184 cm',
     },
       { foto: jugadora2,
       numero: 15,
       nombre: 'Petra Schwartzman ',
       posicion: 'Opuesta ',
       edad: 21,
       estatura: '184 cm',
     },
       { foto: jugadora3,
       numero: 12,
       nombre: 'Isabella Vallebuona',
       posicion: 'Armadora',
       edad: 20,
       estatura: '181 cm',
     },
       { foto: jugadora4,
       numero: 8,
       nombre: 'Gabriela Badilla ',
       posicion: 'Punta ',
       edad: 18,
       estatura: '175 cm',
     },
       { foto: jugadora5,
       numero: 7,
       nombre: 'Dominga Aylwin ',
       posicion: 'Punta ',
       edad: 23,
       estatura: '184 cm',
     },
       { foto: jugadora6,
       numero: 5,
       nombre: 'Paula Salinas Limaco',
       posicion: 'Armadora',
       edad: 29,
       estatura: '1,67 cm',
     },
       { foto: jugadora7,
       numero: 9,
       nombre: 'Elisa Sandrock Cox',
       posicion: 'Central ',
       edad: 25,
       estatura: '180 cm',
     },
       { foto: jugadora8,
       numero:13,
       nombre: 'Paula Vallejos ',
       posicion: 'Opuesta  ',
       edad: 29,
       estatura: '180 cm',
     },
       { foto: jugadora9,
       numero: 6,
       nombre: 'Kare Morales ',
       posicion: 'Central',
       edad: 25,
       estatura: '187 cm',
     },
       { foto: jugadora10,
       numero:4,
       nombre: 'Beatriz Novoa ',
       posicion: 'Punta receptora  ',
       edad: 22,
       estatura: '177 cm',
     },
       { foto: jugadora11,
       numero: 44,
       nombre: 'Carla Ruz ',
       posicion: 'Libero  ',
       edad: 32,
       estatura: '161 cm',
     },
       // Agrega más jugadores según sea necesario
     ],
   },
 ];


 return (
   <Container>
     <Row>
       <Col>
         <h2>EQUIPOS</h2>
         {equipos.map((equipo, index) => (
           <div key={index} style={{ marginBottom: '10px' }}>
             <h4>
             <ScrollLink
               to={`equipo-${index + 1}`}
               spy={true}
               smooth={true}
               duration={500}
               style={{
                 textDecoration: 'none',
                 fontWeight: 'normal',
                 color: '#033D87',
                 cursor: 'pointer',
                 transition: 'color 0.3s', // Agregar una transición para un cambio suave de color
               }}
               activeStyle={{ color: '#C4202D' }} // Opcional: Estilo al estar activo (scrolling a la sección)
               onMouseOver={(e) => e.target.style.color = '#C4202D'} // Cambiar el color al hacer hover
               onMouseOut={(e) => e.target.style.color = '#033D87'} // Restaurar el color al dejar de hacer hover
             >
               {equipo.nombre}
             </ScrollLink>
             </h4>
           </div>
         ))}
       </Col>
     </Row>
     {equipos.map((equipo, index) => (
       <Element key={index} name={`equipo-${index + 1}`} className="equipo-section">
         <h2>{equipo.nombre}</h2>
         <h4>Entrenador: {equipo.entrenador}</h4>
         <Row className="justify-content-center">
           {equipo.jugadores.map((jugador, index) => (
             <JugadorCard key={index} {...jugador} />
           ))}
         </Row>
       </Element>
     ))}
   </Container>
 );
};


export default Equipos;