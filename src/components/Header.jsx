import React from 'react';
import '../assets/style/components/Header.scss';
import metal from '../assets/static/metal.jpg';
import icon from '../assets/static/user-icon.png';



const Header = () => {
    return(
        <div className='header'>
    <header className="header">
    <img className="header__img" src={metal} alt="niggavideo" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={icon} class="icon" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
        </div>
    );
};
export default Header;