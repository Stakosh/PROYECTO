// Layout.js
import React from 'react';
import logo from '../img/logo.jpg';
import team from '../img/team.jpeg';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';


const Layout = ({ children }) => {
 return (
   <div>
     <Navbar bg="white" variant="white" expand="lg" className="justify-content-between">
       <Container>
           <Navbar.Brand as={Link} to="/">
           <Image src={logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className='ml-auto'>
             <Link to="/equipos" className='nav-link'>
               Equipos
             </Link>
             <a href="https://www.fevochi.cl/wp-content/uploads/2023/10/Calendario-Fevochi-2023-6.pdf" target="_blank" className='nav-link'>
               Calendario
             </a>
             <Link to="/noticias" className='nav-link'>
               Noticias
             </Link>
             <Link to="/galeria" className='nav-link'>
               Galería
             </Link>
             <a href="#contacto" className='nav-link'>
               Contacto
             </a>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>


     <div style={{ width: '100%' }}>
     {children}
     </div>




     <footer id='contacto' style={{ backgroundColor: '#033D87', color: 'white', padding: '20px 0' }}>
       <div className="container">
         <div className="row">
           <div className="col-md-6">
             <h4>Nuestra historia</h4>
             <p>La Federación de Voleibol de Chile (FEVOCHI) es
               la federación que rige el Vóleibol en Chile. Está asociada
               a la Federación Internacional de Vóleibol y al Comité Olímpico
               de Chile. Fundada por Benedicto Kocian.</p>
           </div>
           <div className="col-md-6">
             <div className="row">
               <div className="col-md-6">
                 <h4>Contacto</h4>
                 <p>Correo: info@fevochi.cl</p>
                 <p>Teléfono: +56 9 88390703 / +56 2 33099453
                 </p>
                 <p>Dirección: Ramón Cruz 1176 of. 404, Ñuñoa, Santiago, Chile</p>
               </div>
               <div className="col-md-6">
                 <h4>Redes Sociales</h4>
                 <div className="social-icons">
                   <a href="https://www.instagram.com/fevochi/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white', marginRight: '10px' }} /></a>
                   <a href="https://web.facebook.com/fevochi1?locale=es_LA" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white', marginRight: '10px' }} /></a>
                   <a href="https://www.youtube.com/@federaciondevoleiboldechil9391/featured" target="_blank" rel="noopener noreferrer"><FaYoutube style={{ color: 'white', marginRight: '10px' }} /></a>
                   <a href="https://www.tiktok.com/@fevochi" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ color: 'white', marginRight: '10px' }} /></a>
                   <a href="https://twitter.com/fevochi_oficial" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: 'white' }} /></a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </footer>
   </div>
 );
};


export default Layout;