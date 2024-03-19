
import { getProducts } from '../../asyncMock';
import React, { useEffect, useState} from 'react';
import Item from '../Item';

function tiendaComponent() {

  const [products, setProducts] = useState ([]);

  useEffect (()=>{
    getProducts()
      .then(data=>{
        setProducts(data)
      })
      .catch(error=>{
        console.error(error)
      })
  },[])

  

  return (
    <div className="d-flex justify-content-evenly">
      {products.map(prod=>(
      <Item key={prod.id} {...prod}/>))}
    </div>
  )
}

export default tiendaComponent
