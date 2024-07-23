import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react"
import Boton from "../Boton/Boton"
import "./css/style.css"
import cartLogo from "./assets/cart.jpeg"

const CartWidget = () => {

    return (
        <div className='row justify-content-md-center margen-fila'>
            <div className='col-2'>
                <img src={cartLogo} alt="Logo carrito de compras" />
            </div>
            <div className='col-2'>
                <h2>0</h2>
        </div>
</div>
    )
}

export default CartWidget
