import {createContext, useEffect, useState} from 'react';


export const CartContext = createContext({cart: []});

export function CartProvider ({children}){
    const [cart, setCart]=useState([]);
    const [cantidadTotal, setCantidadTotal]=useState(0);

    useEffect(()=>{
        let total=0;
        cart.map(prod=>{
            total+=prod.quantity
        })
        setCantidadTotal(total)
    }, [cart])

    const isInCart = (id)=>{
        if(cart.some((el)=>el.id===id)){
        }
    }

    const addItem =(product,quantity)=>{
        if(!isInCart(product.id)){
            setCart(prevCart=>[...prevCart, {product, quantity}])
        }else{
            console.log ("El producto ya fue agregado")
        }
    }

    const removeItem = (id) => {
        const cartActualizado = cart.filter(prod=>prod.product.id!==id)
        setCart(cartActualizado)
    }

    const clear =()=>{
        setCart([])
    }


    return (
        <>
            <CartContext.Provider value ={{cart, cantidadTotal, addItem, removeItem, clear}}>
            {(children)}
            </CartContext.Provider>
        </>
        
    );
}