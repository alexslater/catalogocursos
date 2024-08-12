import React, { useState, useEffect } from "react";
import { getCurso } from '../../asyncMock'
import { ItemDetail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = (props) => {

    const [curso, setCurso] = useState({})
    const [cargando, setCargando] = useState(true)
    const [cursoID, setCursoID] = useState(1)

    const mostrarSiguiente = () => {
        // Agregar acá comportamiento para evitar que se muestren numeros mayores al max ID
        setCursoID(cursoID + 1)
    }

    const mostrarAnterior = () => {
        if (cursoID > 1)
            setCursoID(cursoID - 1)
    }

    useEffect(() => {
        getCurso(cursoID)
        .then((res) => setCurso(res))
        .catch((err) => console.log("Error: " + err))
        .finally(() => setCargando(false))
    }, [cursoID])

    if(cargando) {
        return (
            <div><h4>Cargando...</h4></div>
        )
    }
    else {
        return (
            <>
            {
                cargando ?
                <h6>Cargando ...</h6>
                :
                <div className="row">
                    <ItemDetail curso={curso} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior} />
                </div>
            }
            </>
        )
    }
    }
