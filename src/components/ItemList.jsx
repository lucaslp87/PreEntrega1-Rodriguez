import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    <div className="d-flex justify-content-evenly">
      {products.map(prod=>(
      <Item key={prod.id} {...prod}/>))}
    </div>
  )
}

export default ItemList
