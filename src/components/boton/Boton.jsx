import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Boton = (props) => {

    const {texto, fn, estiloboton} = props
    const estilo = 'btn ' + estiloboton

    return (
        <button type="button" className={estilo} onClick={() => fn()}>{props.texto}</button>
    )
}

export default Boton