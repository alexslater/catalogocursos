import React, { useState, useEffect } from 'react'
import { getCursosCategoria } from '../../asyncMock'
import { getCursos } from '../../asyncMock'
import ItemCurso from '../ItemCurso/ItemCurso'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'

const ItemListContainer = () => {

    const [cursos, setCursos] = useState([])
    const [cargando, setCargando] = useState(true)
    
    const params = useParams()
    console.log(params)

    useEffect(() => {
        if(params) {
            getCursosCategoria(params.categoriaID)
            .then((res) => setCursos(res))
            .catch((err) => console.log("Error: " + err))
            .finally(() => setCargando(false))
        }
        if(params.categoriaID === undefined) {
            getCursos()
            .then((res) => setCursos(res))
            .catch((err) => console.log("Error: " + err))
            .finally(() => setCargando(false))
            console.log("Pasaste por aca?")
        }
    }, [])

  

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
                       <>
                       <ItemCurso key={el.id} curso={el} /> 
                    
                       </>
                    )
                })}
            </div>
        )
    }
    
}

export default ItemListContainer