import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom';
import CartItem from './CartItem';

function Cart() {
  const {cart, clear, cantidadTotal} =useContext(CartContext);
  const [total, setTotal]=useState(0);

  const handleClear=()=>{
    clear()
  }

  useEffect(()=>{
    let suma =0;
    cart.forEach(el=>{
      suma+= el.product.price*el.quantity
    })
    setTotal(suma)
  },[cart])

  if (cantidadTotal === 0) {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{minHeight:'100vh'}}>
          <div className="col text-center">
            <h2>El carrito está vacío</h2>
            <Link to='/tienda' className="btn btn-dark mt-3">Ir a la tienda</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    <h2 className='text-center mt-3'>Carrito de compras:</h2>
    <div className='list-group mt-4'>
      {cart.map(p =><CartItem key={p.product.id} {...p}/>)}
    </div>
    <h3 className='text-center mt-3'>Total: ${total} </h3>
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Link to ="/checkout" className='btn btn-success my-2'>Checkout</Link>
      <button className='btn btn-secondary my-2' onClick={handleClear}>Limpiar carrito</button>
      <Link to='/' className='col-4 btn btn-dark my-2'>Volver al inicio</Link>
    </div>
    </>
  
  )
}

export default Cart
