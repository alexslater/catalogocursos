import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react"
import Boton from "../Boton/Boton"
import "./css/style.css"

const ItemCount = ({id, handleComprar}) => {

    const[count, setCount] = useState(1)

    const sumar = () => {

        if(count < 15) {
            setCount(count + 1)
        }
        else if(count === 15) {
            alert("Puedes comprar un máximo de 15 cupos por curso!")
        } 
    }

    const restar = () => {
        if(count > 1)
            setCount(count - 1)
    }

    return (
        <div className="container">

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
                <div className='col-1'>
                    <button className="btn btn-primary" onClick={() => handleComprar(count)}>Comprar</button>
                </div>
            </div>
        </div> 
    )
}

export default ItemCount