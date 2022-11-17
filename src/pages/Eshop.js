import React  from 'react';
import Products from '../components/products';

import '../styles/eshop.css';

function Eshop() {

  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 className="hero-title text-uppercase">Recuperez le flow de <br/> batman avec notre e-shop!</h1>
          </div>
        </div>
      </section>
      <div className='row px-0 mx-0'>
          <div className="col-3 bg-primari">
            filter
          </div>
          <div className="col-9 pg-danger">
            <Products></Products>
          </div>
        </div>
      
    </>
  )
}

export default Eshop
