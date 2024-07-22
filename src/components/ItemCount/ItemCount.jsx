import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react"
import Boton from "../Boton/Boton"


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
            <Boton texto="-"    fn={restar}/>
            <span>{count}</span>
            <Boton texto="+" fn={sumar}/>
        </div> 
    )
}

export default ItemCount