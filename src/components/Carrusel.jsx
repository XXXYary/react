
import React from 'react';
import '../assets/style/components/Carrusel.scss';
import imagen from '../assets/play-icon.png'
import img from '../assets/plus-icon.png'

const Carrusel = ({children}) =>{
    return(
        <div className="Carrusel">
        <section class="carousel_container">
          {children}
       </section>
      </div>
    );
};

export default Carrusel;
