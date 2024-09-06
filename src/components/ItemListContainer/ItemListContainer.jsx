import React, { useState, useEffect } from 'react'
import { getCursosCategoria } from '../../asyncMock'
import { getCursos } from '../../asyncMock'
import ItemCurso from '../ItemCurso/ItemCurso'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { db } from '../../services/firebaseConfig'
import { collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {

    const [cursos, setCursos] = useState([])
    const [cargando, setCargando] = useState(true)
    
    //const params = useParams()
    const { categoriaID } = useParams()
    console.log("PARAMS DEL ITEMLIST CONTAINER: ", categoriaID)

    // Con AsyncMock
    /*
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
    */

    useEffect(() => {

        const cursosRef = collection(db, "cursos")
        if(categoriaID) {
            const cursosPorCategoria = query(cursosRef, where("categoria", "==", categoriaID))
            getDocs(cursosPorCategoria).then(snapshot => { 
                const curso = snapshot.docs.map(doc => {
                    return (
                        doc.data()
                    )
                })
                setCursos(curso)
            }).finally(setCargando(false))
        }
        else {
            getDocs(cursosRef).then(snapshot => {
                const listacursos = snapshot.docs.map( doc => {
                    return (
                        doc.data()
                    )
                } )
                setCursos(listacursos)
             } ).finally(setCargando(false))
            
        }
      
    }, [categoriaID])
    

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