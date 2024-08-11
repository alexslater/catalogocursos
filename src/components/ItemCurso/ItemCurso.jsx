import React from 'react'

const ItemCurso = ({curso}) => {

 return (
    <div key={curso.id} className='card'>
        <h5 className='card-title'>{curso.nombre_curso}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {curso.valor}</h6>
        <p className='card-text'>Horas: {curso.horas}</p>
    </div>
 )

}

export default ItemCurso