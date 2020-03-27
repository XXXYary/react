import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Holamundo from './components/Holamundo';*/
import * as serviceWorker from './serviceWorker';
/*import Stateful from '../src/components/Stateful';*/
//import Button from '../src/components/Button';
//import Header from '../src/components/Header';
//import Search from '../src/components/Search';
//import Carrusel from '../src/components/Carrusel';
//import Footer from '../src/components/Footer';
//import Carruselitem from './components/Carruselitem';
//import Vacaciones from '../src/examen2/vacaciones';
//import Clasedigital from '../src/examen2/Clasedigital';
//import CSL from '../src/examen2/CSL';
import App from '../src/container/App';
//import Layout from '../src/container/Layout';
//import Login from './container/Login';
//import Register from './container/Login';

/*ReactDOM.render(<Holamundo />, document.getElementById('root'));*/
/*ReactDOM.render(<Stateful/>, document.getElementById('root'));*/
//ReactDOM.render(<Button text="Guardar"/>, document.getElementById('root'));
//ReactDOM.render(<Header/>, document.getElementById('root'));
//ReactDOM.render(<Carrusel/>, document.getElementById('root'));
//ReactDOM.render(<Footer/>, document.getElementById('root'));
//ReactDOM.render(<Carruselitem/>, document.getElementById('root'));
//ReactDOM.render(<CSL/>, document.getElementById('root'));
//ReactDOM.render(<Vacaciones/>, document.getElementById('root'));
//ReactDOM.render(<Clasedigital/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Layout/>, document.getElementById('root'));
//ReactDOM.render(<Login/>, document.getElementById('root'));
//ReactDOM.render(<Register/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
