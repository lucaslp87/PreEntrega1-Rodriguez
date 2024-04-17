import './App.css'
import NavBar from './components/navigation/NavBar';
<<<<<<< HEAD
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
=======
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import TiendaComponent from './components/tienda/TiendaComponent';
import ContactoComponent from './components/contacto/contactoComponent';
import ProductoComponent from './components/producto/ProductoComponent';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/tienda" element={<TiendaComponent />} />
        <Route exact path="/producto/:prodId" element={<ProductoComponent />} />
        <Route exact path="/contacto" element={<ContactoComponent />} />
      </Routes>
    </BrowserRouter>
      {/* <ItemListContainer greeting="Bienvenido"/>
      <ItemDetailContainer/> */}
>>>>>>> 232ea11b93ebc3094309635c625d26884c0f4aa9
      
    </>
  )
}

export default App
