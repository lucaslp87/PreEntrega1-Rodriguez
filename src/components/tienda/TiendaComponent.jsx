import { filterCategory, getProducts} from '../../firebase/firebase';
import React, { useEffect, useState} from 'react';
import Item from './Item';
import NavTienda from './NavTienda';
import {useLocation} from 'react-router-dom'
import Loader from './Loader';

function tiendaComponent() {

  const [products, setProducts] = useState ([]);
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


export default tiendaComponent
