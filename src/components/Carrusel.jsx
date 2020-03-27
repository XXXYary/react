
import React from 'react';
import '../assets/style/components/Carrusel.scss';
import imagen from '../assets/play-icon.png'
import img from '../assets/plus-icon.png'

const Carrusel = ({children}) =>{
    return(
        <section class="carousel">
        <div class="carousel_container">
          {children}
       </div>
      </section>
    );
};

export default Carrusel;
