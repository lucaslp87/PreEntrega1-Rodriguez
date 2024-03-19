import './App.css'
import NavBar from './components/navigation/NavBar';
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
      
    </>
  )
}

export default App
