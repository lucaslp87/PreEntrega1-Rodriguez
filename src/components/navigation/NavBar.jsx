import CartWidget from "../cart/CartWidget";
import {NavLink} from 'react-router-dom';

export default function NavBar() {


    return (
      <nav className="navbar navbar-expand-xl bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="../img/logo.png" className="border border-1 border-light rounded" width="200"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <NavLink to={"/"} className="nav-link" activeclassname='active' id="btn-home" name="home" aria-current="page" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink to={"/tienda"} className="nav-link" activeclassname='active' id="btn-shop" name="shop" href="#">
                  Tienda
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink to={"/contacto"} className="nav-link" activeclassname='active' id="btn-contact" name="contact" href="#">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <CartWidget/>
            <form className="d-flex me-5 pe-5" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscá tu producto" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      
  )
}