import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting="Esta es la grilla de productos"/>
    </div>
      
    </>
  )
}

export default App
