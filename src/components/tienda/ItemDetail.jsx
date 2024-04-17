import React, {useState, useEffect , useContext} from 'react'
import ItemCount from './ItemCount'
import '../../index.css'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getProductByID } from '../../firebase/firebase'

function ItemDetail() {
    const [cantidadAgregada, setCantidadAgregada]=useState(0);

    const {prodId} = useParams();

    const [product, setProduct] = useState({})

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (counter)=> {
        setCantidadAgregada (counter);
    
    const item ={
        id: product.id,
        title: product.title,
        price: product.price
    }

    addItem (item, counter)
}

useEffect(()=>{
    getProductByID(prodId)
    .then(response=>{
        setProduct (response)
    })
    .catch(error=>{
        console.error(error)
    })
}, [])

return (
    <div>
        <div className="card text-bg-dark my-3 mx-auto" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start h-100" style={{ objectFit: 'cover' }} alt={product.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Precio: ${product.price}</p>
                        <p className="card-text"><i>Stock: {product.stock}</i></p>
                        {
                            cantidadAgregada > 0 ? (
                                <Link to='/cart'  className="btn btn-secondary"> Terminar compra </Link> 
                            ):( 
                                <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ItemDetail
