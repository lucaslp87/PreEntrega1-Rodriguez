import React, {useState, useEffect} from 'react'
import { getProductByID } from '../asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductByID(1)
        .then(response=>{
            setProduct (response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [])


  return (
    <div>
        <ItemDetail {...product}/>  
    </div>
  )
}

export default ItemDetailContainer
