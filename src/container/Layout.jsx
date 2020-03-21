import React from 'react';
import '../assets/style/components/CSL.scss';
import CSL from '../examen2/CSL';
import Vacaciones from'../examen2/Vacaciones';
import Clasedigital from'../examen2/Clasedigital';


const Layout = () =>{
    return(
        <div className="Layout">
            <CSL />
            <Vacaciones />
            <Clasedigital />
        </div>
    )
}

export default Layout;