// Calendario.js
import '../App.css';
//import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Countdown = ({ fechaEvento }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const eventoDate = new Date(fechaEvento).getTime();
    const difference = eventoDate - now;

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
    const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((difference % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [fechaEvento]);

  return (
    <Row>
      <Col style={{ backgroundColor: '#033D87', padding: '20px', borderRadius: '0.5rem', color: '#fff' }}>
        <h2 style={{ color: 'white' }}>COUNTDOWN</h2>
        <div>
          <h4 style={{ color: 'white' }}>{timeLeft.dias} días, {timeLeft.horas} horas, {timeLeft.minutos} minutos, {timeLeft.segundos} segundos</h4>
        </div>
      </Col>
    </Row>
  );
};

const EventoCard = ({ nombre, ubicacion, fecha, hora }) => (
  <Row className='justify-content-center align-items-center'>
    <Col md={12} className='mb-3 mx-auto'>
      <Card>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x200"
              className="img-fluid mb-2 card-img-top m-md-2 m-lg-4"
              style={{ borderRadius: '0.25rem' }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title style={{ color: '#033D87', fontWeight: 'bold' }}>{nombre}</Card.Title>
              <Card.Text style={{ fontSize: '16px', color: '#033D87' }}>
                {ubicacion}
                <br />
                {fecha}
                <br />
                {hora} hrs
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

const Calendario = () => {
  // Simulación de datos para eventos
  const eventos = [
    {
      nombre: 'Nombre del Evento 1',
      ubicacion: 'Ubicación del Evento 1',
      fecha: 'DD/MM/AAAA',
      hora: 'XX:XX',
    },
    {
      nombre: 'Nombre del Evento 2',
      ubicacion: 'Ubicación del Evento 2',
      fecha: 'DD/MM/AAAA',
      hora: 'XX:XX',
    },
    // Agregar más eventos según sea necesario
  ];

  // Simulación de datos para el countdown
  const fechaProximoEvento = '2026-12-01T18:30:00';
  // YYYY: Año con cuatro dígitos
  // MM: Mes (01-12)
  // DD: Día del mes (01-31)
  // T: Separador entre la fecha y la hora
  // HH: Hora en formato de 24 horas (00-23)
  // mm: Minutos (00-59)
  // ss: Segundos (00-59)
  return (
    <Container>
      <Countdown fechaEvento={fechaProximoEvento} />
      <h2 className='mt-4'>Próximos Eventos</h2>
      {eventos.map((evento, index) => (
        <EventoCard key={index} {...evento} />
      ))}
    </Container>
  );
};

export default Calendario;
