<<<<<<< HEAD
import CartWidget from "../cart/CartWidget";
import {NavLink} from 'react-router-dom';

export default function NavBar() {


=======
import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';

export default function NavBar() {
>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9
    return (
      <nav className="navbar navbar-expand-xl bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="../img/logo.png" className="border border-1 border-light rounded" width="200"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
<<<<<<< HEAD
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
=======
            <ul className="navbar-nav nav nav-underline ms-0 me-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item px-2">
                <Link to={"/"} className="nav-link " id="btn-home" name="home" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to={"/tienda"} className="nav-link" id="btn-shop" name="shop" href="#">
                  Tienda
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link to={"/contacto"} className="nav-link" id="btn-contact" name="contact" href="#">
                  Contacto
                </Link>
              </li>
            </ul>
            <CartWidget/>
            <form className="d-flex me-3" role="search">
>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9
              <input className="form-control me-2" type="search" placeholder="Buscá tu producto" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      
  )
}