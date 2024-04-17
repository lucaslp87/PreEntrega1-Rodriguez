import React from 'react'
import { Link } from 'react-router-dom'


function NavTienda() {
  return (
    <div>
        <ul className="nav bg-body-secondary nav-underline justify-content-evenly">
            <li className="nav-item">
            <Link to="/tienda" className="nav-link text-dark" href="#">Todo</Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
            <Link to="?categoryId=2" className="nav-link text-dark" href="#">Yerberas</Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
            <Link to="?categoryId=1" className="nav-link text-dark" href="#">Mates</Link>
            </li>
            <div className="vr"></div>
            <li className="nav-item">
            <Link to="?categoryId=3" className="nav-link text-dark" href="#">Termos</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavTienda
