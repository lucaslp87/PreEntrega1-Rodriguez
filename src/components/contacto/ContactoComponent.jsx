import React from 'react';

function ContactoComponent() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contactanos</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Escriba su mensaje aquí" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactoComponent;
