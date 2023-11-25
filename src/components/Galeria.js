// Galeria.js


import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import '../App.css';


function importAll(r) {
 return r.keys().map(r);
}


const imageFiles = importAll(require.context('../../public/fotos_fav/', false, /\.(png|jpe?g|svg)$/));


export const galeriaImages = imageFiles.map((src, index) => {
 const width = 200; // Ancho fijo para las imágenes
 const img = new Image();
 img.src = src;
 const aspectRatio = img.width / img.height;
 const height = width / aspectRatio;


 return {
   src,
   width,
   height,
 };
});


const Galeria = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [currentImage, setCurrentImage] = useState(0);


 const openLightbox = (event, { photo, index }) => {
   setCurrentImage(index);
   setIsOpen(true);
 };


 const closeLightbox = () => {
   setCurrentImage(0);
   setIsOpen(false);
 };


 return (
   <div className="m-5 center-gallery-container">
     <div className="row">
       {galeriaImages.map((photo, index) => (
         <div key={index} className="col-6 col-md-3 mb-3">
           <img
             src={photo.src}
             alt={`Imagen ${index + 1}`}
             className="img-fluid"
             style={{
               cursor: 'pointer',
               objectFit: 'cover',
               width: '100%',
               height: '100%',
               borderRadius: '10px', // Ajusta el valor según sea necesario
             }}
             onClick={(e) => openLightbox(e, { photo, index })}
           />
         </div>
       ))}
     </div>
     <ModalGateway>
       {isOpen ? (
         <Modal onClose={closeLightbox}>
           <Carousel
             currentIndex={currentImage}
             views={galeriaImages.map((photo) => ({
               ...photo,
               srcset: photo.srcSet,
               caption: photo.title,
             }))}
           />
         </Modal>
       ) : null}
     </ModalGateway>
   </div>
 );
};


export default Galeria;
