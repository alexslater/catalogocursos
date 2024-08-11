import React, { useState, useEffect } from 'react'
import { getCursos } from '../../asyncMock'
import ItemCurso from '../ItemCurso/ItemCurso'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {

    const [cursos, setCursos] = useState([])
    const [cargando, setCargando] = useState(true)
    
    useEffect(() => {
        getCursos()
        .then((res) => setCursos(res))
        .catch((err) => console.log("Error: " + err))
        .finally(() => setCargando(false))
    }, [])

    console.log(cursos)

    if(cargando) {
        return (
            <div><h4>Cargando...</h4></div>
        )
    }
    else {
        return (
            <div className='row'>
                {cursos.map((el) => {
                    return (
                       <><ItemCurso key={el.id} curso={el} />
                       <ItemCount /></>
                    )
                })}
            </div>
        )
    }
    
}

export default ItemListContainer