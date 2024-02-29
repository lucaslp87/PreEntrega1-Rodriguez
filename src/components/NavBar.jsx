import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-xl bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand"><img src="../img/logo.png" className="border border-1 border-light rounded" width="200"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav nav-underline ms-0 me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item px-2">
            <a className="nav-link active" id="btn-home" name="home" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" id="btn-shop" name="shop" href="#">Tienda</a>
          </li>
          <li className="nav-item px-2 dropdown">
            <a className="nav-link dropdown-toggle" name="products" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" id="btn-yerberas" name="yerberas" href="#">Yerberas</a></li>
              <li><a className="dropdown-item" id="btn-canastas" name="canastas" href="#">Canastas materas</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" id="btn-mates" name="mates" href="#">Mates</a></li>
              <li><a className="dropdown-item" id="btn-termos" name="termos" href="#">Termos</a></li>
              <li><a className="dropdown-item" id="btn-bombillas" name="bombillas" href="#">Bombillas</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" id="btn-yerba" name="yerba" href="#">Yerba</a></li>
            </ul>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" id="btn-contact" name="contact" href="#" >Contacto</a>
          </li>
        </ul>
        <CartWidget/>
        <form className="d-flex me-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscá tu producto" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
      
  )
}