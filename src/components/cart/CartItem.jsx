import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartItem(props) {

    const {removeItem} =useContext(CartContext)

    const handleRemoveItem=()=>{
        removeItem(props.product.id)
    }
    return (
        <li className='d-flex list-group-item m-1 bg-body-secondary align-items-center'>
            <div className='col-10 row align-items-center ms-5' style={{minHeight:'15vh'}}>
                <div className="col-3">
                    <p><i>Nombre: </i><b>{props.product.title}</b></p>
                </div>
                <div className="col-3">
                    <p><i>Precio: </i><b>${props.product.price}</b></p>
                </div>
                <div className="col-3">
                    <p><i>Cantidad: </i><b>{props.quantity}</b></p>
                </div>
                <div className="col-3">
                    <p><i>Subtotal: </i><b>${props.quantity*props.product.price}</b></p>
                </div>
            </div>
            <button className='col-1 btn btn-dark h-25' onClick={handleRemoveItem}>Borrar</button>
        </li>
    )
}

export default CartItem
