import './App.css'
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import TiendaComponent from './components/tienda/TiendaComponent';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import ItemDetail from './components/tienda/ItemDetail';
import Checkout from './components/cart/Checkout';
import ContactoComponent from './components/contacto/ContactoComponent';

function App() {

  const  [cartVisibility, setCartVisibility] =useState(false)

  const toggleCartVisibility = ()=>{
    setCartVisibility(!cartVisibility)
  }

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/tienda" element={<TiendaComponent />} />
            <Route exact path="/producto/:prodId" element={<ItemDetail />} />
            <Route exact path="/contacto" element={<ContactoComponent/>} />
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
      
    </>
  )
}

export default App
