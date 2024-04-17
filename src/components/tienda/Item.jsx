import React from 'react';
import '../../index.css'
import { useNavigate } from 'react-router-dom'

function Item({id, title, image, price, stock}) {
  
  const navigate =useNavigate();

  const handleClick =(id)=>{
    navigate (`/producto/${id}`)
  }

  return (
    <div className="card text-bg-light text-center m-3 px-0 pb-2" style={{width: "25rem",}}>
      <img src={image} className="card-img-top" alt="nombre"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <button href="#" className="btn btn-dark" onClick={()=>handleClick(id)}>Ver detalle</button>
      </div>
    </div>
  )
}

export default Item
