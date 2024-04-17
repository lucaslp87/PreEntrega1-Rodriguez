import React from 'react';
import '../index.css'
import { useNavigate } from 'react-router-dom'

function Item({id, nombre, imagen, precio, stock}) {
  const navigate =useNavigate();

  const handleClick =(id)=>{
    navigate (`/producto/${id}`)
  }

  return (
    <div className="card text-bg-light text-center my-3 pb-2" style={{width: "18rem",}}>
      <img src={imagen} className="card-img-top" alt="nombre"/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock: {stock}</p>
        <button href="#" className="btn btn-dark" onClick={()=>handleClick(id)}>Ver detalle</button>
      </div>
    </div>
  )
}

export default Item
