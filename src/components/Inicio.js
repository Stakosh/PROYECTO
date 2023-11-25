// Inicio.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import sponsor1 from '../img/sponsor1.png';
import sponsor2 from '../img/sponsor2.png';
import sponsor3 from '../img/sponsor3.png';
import sponsor4 from '../img/sponsor4.jpeg';
import sponsor5 from '../img/sponsor5.png';
import sponsor6 from '../img/sponsor6.jpeg';
import noticia1 from '../img/noticia1.jpg';
import noticia2 from '../img/noticia2.jpg';
import { Image, Container, Button, Card, Row, Col, Carousel } from 'react-bootstrap';
import team from '../img/team.jpeg';
import { galeriaImages } from './Galeria';






function Inicio() {
 useEffect(() => {
   const somosText = document.getElementById('fevochi');
   console.log(somosText.textContent);
 }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje inicial


 const sponsors = [
   { id: 1, src: sponsor1, link: 'https://betwarrior.bet/es/login' },
   { id: 2, src: sponsor2, link: 'https://cdomas.cl' },
   { id: 3, src: sponsor3, link: 'http://www.meds.cl/' },
   { id: 4, src: sponsor4, link: 'https://www.federicogili.cl/1000-deportes?marcas=mikasa' },
   { id: 5, src: sponsor5, link: 'https://betwarrior.bet/es/login' },
   { id: 6, src: sponsor6, link: 'http://www.rosen.cl/' },
 ];


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
       <Col className="countdown-container">
         <h2 className="countdown-title">COUNTDOWN</h2>
         <div>
           <h4 className="countdown-text">
             {timeLeft.dias} días, {timeLeft.horas} horas, {timeLeft.minutos} minutos, {timeLeft.segundos} segundos
           </h4>
         </div>
       </Col>
     </Row>
   );
 };


 const selectedImages = galeriaImages.slice(0, 5);


 return (
   <div>
     {/* Contenido específico de la página de inicio */}
       <section className="hero">
           <Image src={team} alt="Hero" fluid />
           <div className="hero-content" style={{ color: 'white' }}>
             <div className='fevochi-container'>
               <span id='somos'>#Somos </span>
               <div id='fevochi' className='fevochi'> FEVOCHI</div>
             </div>
           </div>
       </section>


       <Container className="news-container">
           <h2>NOTICIAS RECIENTES</h2>
           <Row className='justify-content-center'>
             <Col md={6} className='mb-3 mx-auto'>
               <Card>
                 <Card.Img variant="top" src={noticia1} />
                 <Card.Body>
                   <Card.Subtitle className="mb-2" style={{ color: '#033D87'}} >16/11/2023</Card.Subtitle>
                   <Card.Title>
                     <a href="Noticias.js" style={{ color: '#033D87', textDecoration: 'none' }}>
                     DICIEMBRE TRAE LA ÚLTIMA CAPACITACIÓN PARA ENTRENADORES DE MINI VOLEI DEL AÑO
                     </a>
                   </Card.Title>
                 </Card.Body>
               </Card>
             </Col>
             <Col md={6} className='mb-3 mx-auto'>
               <Card>
                 <Card.Img variant="top" src={noticia2} />
                 <Card.Body>
                   <Card.Subtitle className="mb-2" style={{ color: '#033D87'}} >15/11/2023</Card.Subtitle>
                   <Card.Title>
                     <a href="#" style={{ color: '#033D87', textDecoration: 'none' }}>
                     BEATRIZ NOVOA HACE HISTORIA: PRIMERA CHILENA EN LOS 16AVOS DE LA CEV CUP
                     </a>
                   </Card.Title>
                 </Card.Body>
               </Card>
             </Col>
           </Row>
          
           <Button Button variant="primary" className="mt-3">
           <Link to="/noticias" className='news_link'>
               Ver Noticias
             </Link>
           </Button>
       </Container>


       <Container className="event-container">
       <h2>PRÓXIMO EVENTO</h2>
       <Countdown fechaEvento="2023-12-30T18:30:00" /> {/* Reemplaza con la fecha de tu próximo evento */}
      
       <div style={{ marginBottom: "50px"}}></div>


       <a href="https://www.fevochi.cl/wp-content/uploads/2023/10/Calendario-Fevochi-2023-6.pdf" target="_blank" rel="noopener noreferrer">
         <Button variant="primary" className="news_link">
           Ver Calendario
         </Button>
       </a>
       </Container>


       <Container className="gallery-container">
       <h2>FOTOS DESTACADAS</h2>
       <Carousel>
         {selectedImages.map((image, index) => (
           <Carousel.Item key={index}>
             <Image
               src={image.src}
               alt={`Slide ${index + 1}`}
               fluid
               style={{ width: '60vw', height: '60vw', objectFit: 'cover' }}
             />
           </Carousel.Item>
         ))}
       </Carousel>
       <Button Button variant="primary" className="mt-3">
         <Link to="/noticias" className='news_link'>
           Ver Galería
         </Link>
       </Button>
     </Container>


       <Container className="sponsor-container">
           <h2>PATROCINADORES</h2>
           <Row>
             {sponsors.map((sponsor) => (
               <Col key={sponsor.id} md={4} className="mb-3">
                 <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                   <img src={sponsor.src} alt={`Sponsor ${sponsor.id}`} className="img-fluid" />
                 </a>
               </Col>
             ))}
           </Row>
       </Container>
   </div>
 );
}


export default Inicio;

