import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Boton = (props) => {

    const {texto, fn, estiloboton} = props

    return (
        <button type="button" className={estiloboton} onClick={() => fn()}>{props.texto}</button>
    )
}

export default Boton