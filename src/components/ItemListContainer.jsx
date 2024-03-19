import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {getProducts} from '../asyncMock'

function ItemListContainer({greeting}) {
  const [products, setProducts] = useState ([]);

  useEffect (()=>{
    getProducts()
      .then(response=>{
        setProducts(response)
      })
      .catch(error=>{
        console.error(error)
      })
  },[])

  return (
    <>
      <h2 className='d-flex justify-content-center'>{greeting}</h2>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer
