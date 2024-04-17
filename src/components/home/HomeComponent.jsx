<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'

function HomeComponent() {
  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Bienvenido/a a nuestro E-commerce de productos regionales</h1>
      <div className="row mt-5">
        <div id="carouselExampleSlidesOnly" className="col-md-6 carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d22fxaf9t8d39k.cloudfront.net/1411db80dfb01ceb2fcae4eb13f0d6900d38c7a7e131f775938391f1d5c190ea218160.jpg" className="d-block w-100 img-carousel" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Disfrutá del auténtico mate</h5>
                <p>Encontrá los mejores productos para tu ritual del mate.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://d22fxaf9t8d39k.cloudfront.net/892194a5b55efb45cf2a62fc60b70a6d04520953329c5da2f70f9e10ca111c50218160.jpg" className="d-block w-100 img-carousel" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Descubrí nuestras yerberas y termos</h5>
                <p>Productos de calidad para acompañar tu momento matero.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://d22fxaf9t8d39k.cloudfront.net/a05d1d1355498b5d904c236fa925214f997e9ac2daf35d80a8732cca98170485218160.jpg" className="d-block w-100 img-carousel" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Amplia variedad de productos</h5>
                <p>Desde mates artesanales hasta yerba mate de las mejores calidades.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <h2>Conocé nuestra selección</h2>
          <p>Explorá nuestra amplia gama de productos cuidadosamente seleccionados para satisfacer tus necesidades. Mates, termos, yerberas, canastas y mucho más.Tenemos todo lo que necesitas para disfrutar del mejor mate.</p>
          <Link to="/tienda" className="btn btn-success">Ver productos</Link>
        </div>
      </div>
      <div className="mt-3">
          <h2>Unite a nuestra comunidad</h2>
          <p>Descubrí recetas tradicionales, consejos para preparar el mejor mate y participá en nuestra comunidad de amantes del mate. Seguinos en redes sociales para mantenerte al tanto de las últimas novedades y promociones.</p>
          <div className="">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fa-brands fa-square-facebook fa-2x" style={{color: "#198754"}}></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fa-brands fa-square-instagram fa-2x" style={{color: "#198754"}}></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-twitter fa-2x" style={{color: "#198754"}}></i></a>
          </div>
    </div>
    </div>
  );
}

export default HomeComponent;
=======
import React from 'react'

function HomeComponent() {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default HomeComponent
>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9
