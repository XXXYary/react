import React from 'react';
import '../assets/style/components/Search.scss';

const Search = ()=>{
    return(
        <div className='input'>
          <section className="main">
            <h2 class="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..." />
            </section>
        </div>
    );
};

export default Search;