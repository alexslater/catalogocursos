import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react"
import Boton from "../Boton/Boton"
import "./css/style.css"
import cartLogo from "./assets/cart.jpeg"

const ItemCount = () => {

    const[count, setCount] = useState(1)

    const sumar = () => {

        if(count < 15) {
            setCount(count + 1)
        }
        else if(count === 15) {
            alert("Puedes comprar un máximo de 15 cursos!")
        } 
    }

    const restar = () => {
        if(count > 1)
            setCount(count - 1)
    }

    return (
        <div className="container">
            <div className='row justify-content-md-center margen-fila'>
                <div className='col-2'>
                    <img src={cartLogo} alt="Logo carrito de compras" />
                </div>
                <div className='col-2'>
                    <h2>0</h2>
                </div>
            </div>
            <div className='row justify-content-md-center margen-fila'>
                <div className='col-1'>
                    <Boton texto="-" estiloboton="btn btn-secondary" fn={restar}/>
                </div>
                <div className='col-1 border rounded'>
                    <span className='align-middle'>{count}</span>
                </div> 
                <div className='col-1'>
                    <Boton texto="+" estiloboton="btn btn-secondary" fn={sumar}/>
                </div>
            </div>
        </div> 
    )
}

export default ItemCount