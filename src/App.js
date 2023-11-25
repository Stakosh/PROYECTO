
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Equipos from './components/Equipos.js';
import Calendario from './components/Calendario.js';
import Noticias from './components/Noticias.js';
import Galeria from './components/Galeria.js';
import Inicio from './components/Inicio.js';  // Asegúrate de proporcionar la ruta correcta



function App() {
 return (
   <Router>
     <div className="App">
       <Layout>
         <Routes>
           <Route path="/" element={<Inicio />} />
           <Route path="/equipos" element={<Equipos />} />
           <Route path="/calendario" element={<Calendario />} />
           <Route path="/noticias" element={<Noticias />} />
           <Route path="/galeria" element={<Galeria />} />
         </Routes>
       </Layout>
     </div>
   </Router>
 );
}

export default App;
