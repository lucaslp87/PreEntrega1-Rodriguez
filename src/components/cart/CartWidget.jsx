import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidget = () => {

  const {cantidadTotal}=useContext(CartContext)

  return (
    <>
      <Link to='/cart' type="button" className="btn btn-outline-light me-5" style={{display: cantidadTotal>0 ? 'block':'none'}}>
        🛒 (<b>{cantidadTotal}</b>)
      </Link>
    </>
  )
}

export default CartWidget 
