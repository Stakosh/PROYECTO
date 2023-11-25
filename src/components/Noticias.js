// Noticias.js
import noticia1 from '../img/noticia1.jpg';
import noticia2 from '../img/noticia2.jpg';
import noticia3 from '../img/noticia3.jpg';
import noticia4 from '../img/noticia4.png';
import noticia5 from '../img/noticia5.png';
import noticia6 from '../img/noticia6.jpg';
//import Layout from './components/Layout';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const noticias = [
   { titulo: 'DICIEMBRE TRAE LA ÚLTIMA CAPACITACIÓN PARA ENTRENADORES DE MINI VOLEI DEL AÑO', contenido: 'La Federación de Vóleibol de Chile dictará durante el próximo mes (6 al 10 de diciembre) su novena capacitación en lo que va del año, siendo la quinta y última de la misma temática, se trata del Curso para Entrenadores de Mini Volei...', fecha: '16/11/2023', imagen: noticia1 },
   { titulo: 'BEATRIZ NOVOA HACE HISTORIA: PRIMERA CHILENA EN LOS 16AVOS DE LA CEV CUP', contenido: 'Hoy, a las 15:00 horas, la capitana de la selección nacional femenina de voleibol piso, Beatriz Novoa, se embarcará en un hito histórico al disputar los 16avos de final de la prestigiosa Copa de la Confederación Europea de Voleibol (CEV Cup). La jugadora chilena competirá junto a su nuevo club, el CV Hidramar Gran Canaria, y se convertirá en la primera jugadora en competir en el destacado torneo europeo.', fecha: '15/11/2023', imagen: noticia2 },
   { titulo: 'ÉXITO EN EL CURSO DE ENTRENADORES DE MINI VOLEI: MÁS DE 70 APROBADOS CELEBRAN LA CLAUSURA', contenido: 'La Federación de Vóleibol de Chile concluyó con éxito su octava capacitación del año, siendo la cuarta dedicada al Curso de Entrenadores para Mini Volei. La reciente edición, dirigida por el Staff Técnico de la selección nacional, se llevó a cabo de manera virtual a través de la plataforma Zoom, desde el jueves 9 hasta el domingo 12 de noviembre...', fecha: '13/11/2023', imagen: noticia3 },
   { titulo: 'CHILE SE INSTALA EN TAILANDIA EN EL TOP 5️ DEL MUNDIAL U21', contenido: 'Maximiliano Córdova y Thomas Acevedo tras cuatro triunfos consecutivos, se despiden en cuartos de final del Mundial U21 de Voleibol Playa que se disputa en Tailandia, adjudicándose la 5° posición de la cita planetaria...', fecha: '11/11/2023', imagen: noticia4 },
   { titulo: 'MAÑANA VUELVE LA FIESTA DE LA LIGA DE HONOR DEL VOLEIBOL NACIONAL', contenido: 'Este sábado se dará el punta pie inicial al campeonato de honor del voleibol nacional, la Liga A1, tanto en damas como en varones. En la presente edición, por primera vez se disputará la final del torneo criollo en las instalaciones del Gran Arena Monticello...', fecha: '10/11/2023', imagen: noticia5 },
   { titulo: 'SE ABREN LAS INSCRIPCIONES PARA LA 7° ETAPA DE LA LINAME DE VOLEIBOL PLAYA', contenido: 'Ya se abrieron las inscripciones para la 7° Etapa de la Liga Nacional de Menores (LINAME) de Voleibol Playa, la que se disputará el 25 y 26 de noviembre en las arenas de Coquimbo...', fecha: '9/11/2023', imagen: noticia6},


 ];
  function NewsGrid() {
   return (
     <Container className="news-container">
       <h2>NOTICIAS</h2>
       <Row className='justify-content-center'>
         {noticias.map((noticia, index) => (
           <Col md={6} lg={4} key={index} className='mb-3'> {/* Ajusta el tamaño de la columna aquí */}
             <Card>
               <Card.Img
                 variant="top"
                 src={noticia.imagen}
                 style={{ maxWidth: '100%', height: 'auto' }} // Controla el tamaño de la imagen
               />
               <Card.Body>
                 <Card.Subtitle className="mb-2" style={{ color: '#033D87' }}>
                   {noticia.fecha}
                 </Card.Subtitle>
                 <Card.Title>
                   <a href="URL_DESTINO" style={{ color: '#033D87', textDecoration: 'none' }}>
                     {noticia.titulo}
                   </a>
                 </Card.Title>
                 <Card.Text>
                   {noticia.contenido}
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
       <a href="https://www.fevochi.cl" target="_blank" rel="noopener noreferrer">
           <Button variant="primary" className="mt-3">
           Ver más Noticias
           </Button>
       </a>
     </Container>
    


   );
 }


   export default NewsGrid;
  