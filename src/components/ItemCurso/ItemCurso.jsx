import React from 'react'
import { Link } from 'react-router-dom'

const ItemCurso = (props) => {

    const {curso} = props
    const {id, nombre_curso, valor} = curso

    return (
        <div key={id} className='card'>
            <h5 className='card-title'>{nombre_curso}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {valor}</h6>
            <p>{props.children}</p>
            <Link to={`/detalle/${id}`}>Ver detalle</Link>
        </div>
    )

}

export default ItemCurso