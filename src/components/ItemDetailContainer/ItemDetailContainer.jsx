import React, { useState, useEffect } from "react";
import { getCurso } from '../../asyncMock'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useNavigate, useParams } from "react-router-dom";



export const ItemDetailContainer = (props) => {

    const { idcurso } = useParams()
    const [curso, setCurso] = useState({})
    const [cargando, setCargando] = useState(true)
    const [cursoID, setCursoID] = useState(idcurso)
    const navigate = useNavigate()


    
    const mostrarSiguiente = () => {
        let ruta = idcurso*1 + 1
        navigate(`/detalle/${ruta}`)
    }

    const mostrarAnterior = () => {
        let ruta = idcurso*1 - 1
        navigate(`/detalle/${ruta}`)
    }

    useEffect(() => {
        setCargando(true)
        getCurso(idcurso)
        .then((res) => setCurso(res))
        .catch((err) => console.log("Error: " + err))
        .finally(() => setCargando(false))
    }, [cursoID, idcurso])

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
