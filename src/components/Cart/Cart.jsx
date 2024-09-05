import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";

const Cart = () => {
    
    const {cart, setCart, vaciarCarro, totalCompra} = useContext(CartContext)

    const total = () => {
       let t = 0
       for(const e in cart) {
         t += (e.cantidad * e.valor)
       }
    }

    return (
        <>
        <div>
            <h3>Carrito de compra</h3>    
        </div>
        <div>
            {
                cart?.map(e => {
                    return (
                        <CartItem curso={e}/>
                    )
                })
                
           
                
            }  
        </div>
    
        {
                 cart.length > 0 && 
                 <div className='card'>
                 <h5 className='card-title'>Total de la compra</h5>
                 <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {totalCompra()}</h6>
                 <button className="btn btn-danger" onClick={() => vaciarCarro()}>Vaciar carro</button>
                 </div>
    
        }
        {
            cart.length == 0 &&
            <div className='card'>
            <h5 className='card-title'>No hay productos en el carrito!</h5>
            </div>
        }
        </>
    )
}

export default Cart;
