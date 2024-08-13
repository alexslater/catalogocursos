import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import aalogo from './assets/logoaa-small.png';
import CartWidget from '../CartWidget/CartWidget';
import { useEffect, useState } from 'react';
import { getCategorias } from '../../asyncMock'

/*<a className="navbar-brand" href="#">
<img src={aalogo} alt="Logo Amplitud Académica" width="30" height="24" className="d-inline-block align-text-top" />
Amplitud Académica
</a>*/

function NavBar () {

    const [categorias, setCategorias] = useState([])
    const [cargando, setCargando] = useState(true)

  
    useEffect(() => {
        getCategorias()
        .then((res) => setCategorias(res))
        .catch((err) => console.log("Error: " + err))
        .finally(() => setCargando(false))
    }, [])

    console.log(categorias)

    return (
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={aalogo} alt="Logo Amplitud Académica" width="30" height="24" className="d-inline-block align-text-top" />
                Amplitud Académica
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className='navbar-nav'>

                        {
                            categorias.length > 0 && categorias.map(e => <li key={e.id}><a className="nav-link active" aria-current="page" href={`/${e.categoria}`}>{e.categoria}</a></li>)
                        }
                        <li>
                            <a className="nav-link" href="/">Contacto</a>
                        </li>
                        <li>
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
