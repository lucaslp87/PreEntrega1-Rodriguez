import React, {useState} from 'react';

function ItemCount(props) {  
    const [counter, setCounter] = useState(0);

    function sumar(){
      (props.stock>0 && counter!= props.stock) && setCounter(prevCounter => prevCounter+1)
    }
    
    function restar(){
      counter>0 && setCounter(prevCounter => prevCounter-1)
    }

  return (
    <>
    <div className="btn-group justify-content-center" role="group">
        <button type="button" className="btn btn-secondary btn" onClick={restar}>-</button>
        <button type="button" className="btn btn-secondary btn pt-2"><h5>{counter}</h5></button>
        <button type="button" className="btn btn-secondary btn" onClick={sumar}>+</button>
    </div>
    <div>
        <button type="button" className="btn btn-secondary mt-2" onClick={()=> props.onAdd(counter)} disabled={!props.stock}>Agregar al carrito</button>
    </div>
    </>
    
  )
}

export default ItemCount;
