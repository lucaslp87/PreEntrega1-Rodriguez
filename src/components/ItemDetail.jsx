import React from 'react'
import ItemCount from './ItemCount'
import '../index.css'

function ItemDetail({id, nombre, descripcion, precio, imagen, categoria, stock}) {
  return (
    <div>
        <div className="card text-bg-light text-center mt-2 m-auto" style={{width: "18rem",}}>
            <img src={imagen} className="card-img-top" alt="nombre"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Descripción: {descripcion}</p>
                <p className="card-text"><i>Categoría: {categoria}</i></p>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text"><i>Stock: {stock}</i></p>
                <ItemCount stock={stock} onAdd= {(counter) => console.log('Cantidad agregada '+ counter)}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
