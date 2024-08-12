import React from 'react'

const ItemCurso = (props) => {

    const {curso} = props
    const {id, nombre_curso, horas, valor} = curso

    return (
        <div key={id} className='card'>
            <h5 className='card-title'>{nombre_curso}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {valor}</h6>
            <p className='card-text'>Horas: {horas}</p>
            <p>{props.children}</p>
        </div>
    )

}

export default ItemCurso