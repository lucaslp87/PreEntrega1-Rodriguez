    import React, { useContext, useState } from 'react'
    import { useForm } from 'react-hook-form'
    import { CartContext } from '../../context/CartContext';
    import { sendOrder } from '../../firebase/firebase';
    import { Link } from 'react-router-dom';

    function Checkout() {

        const {register, handleSubmit, formState: {errors}} = useForm();
        const {cart} =useContext(CartContext);
        const [loading, setLoading] = useState(false);
        const [orderId, setOrderId] = useState(null);

        const enviar = async (data)=>{
            setLoading(true);
            const arrayNuevo = []
            let total = 0;
            cart.map(el=> {
                arrayNuevo.push(el.product);
                total+=(el.product.price *el.quantity);
            }
            )
            const newOrder={
                buyer:{...data},
                items:arrayNuevo,
                total:total
            }
            const docRefId = await sendOrder(newOrder);
            setOrderId(docRefId);
            setLoading(false);
        }

        if(loading){
            return(
                <div className='d-flex flex-row justify-content-center text-center align-items-center mt-5'>
                    <h4>Su orden esta procesandose </h4>
                    <div className="spinner-grow text-dark ms-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }

        if(orderId){
            return (
                <div className='d-flex flex-column justify-content-center text-center align-items-center'>
                    <div className="alert alert-success w-50  mt-5" role="alert">
                        Nueva orden generada. Nro: {orderId}
                    </div>
                    <Link to='/tienda' className='col-4 btn btn-dark my-2'>Volver a la tienda</Link>
                </div>
                
            ) 
        }
        return(
            <div className="col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 d-flex flex-column justify-content-center text-center mx-auto mt-5 bg-light-subtle border border-dark rounded">
                <h2 className='mt-5'>Datos del cliente</h2>
                <form className='my-5 px-5' onSubmit={handleSubmit(enviar)}>
                    <div className="mb-3 d-flex flex-row">
                        <label className="col-1 form-label mx-5">Nombre:</label>
                        <input type="text" className="form-control ms-0" {...register('name', {required:true})}/>
                        {errors.name && <span className="text-danger">Requerido</span>}
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label className="col-1 form-label mx-5">Email:</label>
                        <input type="email" className="form-control ms-0" {...register('email', {required:true})}/>
                        {errors.email && <span className="text-danger">Requerido</span>}
                    </div>
                    <div className="mb-3 d-flex flex-row">
                        <label className="col-1 form-label mx-5">Teléfono:</label>
                        <input type="phone" className="form-control ms-0"{...register('phone', {required:true})}/>
                        {errors.phone && <span className="text-danger">Requerido</span>}
                    </div>

                    <button type="submit" className="btn btn-success mt-3">Enviar</button>
                </form>
            </div>
        )
    }

    export default Checkout
