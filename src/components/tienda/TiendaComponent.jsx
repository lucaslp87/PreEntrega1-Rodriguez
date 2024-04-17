<<<<<<< HEAD
import { filterCategory, getProducts} from '../../firebase/firebase';
import React, { useEffect, useState} from 'react';
import Item from './Item';
import NavTienda from './NavTienda';
import {useLocation} from 'react-router-dom'
import Loader from './Loader';
=======

import { getProducts } from '../../asyncMock';
import React, { useEffect, useState} from 'react';
import Item from '../Item';
>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9

function tiendaComponent() {

  const [products, setProducts] = useState ([]);
<<<<<<< HEAD
  const [loading, setLoading] = useState (false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('categoryId');
  
  useEffect(()=>{
    setLoading(true)
    if(!categoryId){
      getProducts()
      .then(data=>{
        setProducts(data)
        setLoading(false)
      })
      .catch(error=>{
        console.error(error)
      })
    }else{
      filterCategory(categoryId)
      .then(data=>{
        setProducts(data)
        setLoading(false)
      })
      .catch(error=>{
        console.error(error)
      })
    }
  }, [categoryId])

  return (
    
    <>
      <NavTienda />
      {loading ? 
        <Loader/> 
        : 
        <div className="row d-flex flex-wrap justify-content-center">
        {products.map(prod=>(<Item key={prod.id} {...prod}/>))}
        </div>
      }      
    </>   
  )
}


=======

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

>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9
export default tiendaComponent
