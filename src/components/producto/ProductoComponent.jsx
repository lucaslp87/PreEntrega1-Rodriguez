import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount';
import { getProductByID } from '../../asyncMock';
import '../../index.css'


function ProductoComponent() {

    const {prodId} = useParams();

    const [product, setProduct] = useState({})

    useEffect(()=>{
        getProductByID(prodId)
        .then(response=>{
            setProduct (response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [])

  return (
    <div>
        <div className="card text-bg-dark my-3 mx-auto" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.imagen} className="img-fluid rounded-start h-100" style={{ objectFit: 'cover' }} alt={product.nombre}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">Descripción: {product.descripcion}</p>
                        <p className="card-text"><i>Categoría: {product.categoria}</i></p>
                        <p className="card-text">Precio: ${product.precio}</p>
                        <p className="card-text"><i>Stock: {product.stock}</i></p>
                        <ItemCount stock={product.stock} onAdd= {(counter) => console.log('Cantidad agregada '+ counter)}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductoComponent
