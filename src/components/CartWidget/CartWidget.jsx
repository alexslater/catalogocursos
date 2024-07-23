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
        <>
            <ul className='navbar-nav'>
                <li>
                <img src={cartLogo} alt="Logo carrito de compras" width="30" height="24" className='d-inline-block align-text-top' />
                </li>
                <li><h3>0</h3></li>
            </ul>
        </>


    )
}

export default CartWidget
