import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";


export const CartItem = ({curso}) => {

    const {eliminarCurso} = useContext(CartContext)

  return (  


  <>
    <div key={curso.id} className='card'>
        <h5 className='card-title'>{curso.nombre_curso}</h5>
        <p className='card-text'>Horas: {curso.horas}</p>
        <p className='card-text'>Cantidad: {curso.cantidad}</p>
        <h6 className="card-subtitle mb-2 text-body-secondary">Total $ CLP {curso.valor * curso.cantidad}</h6>
        <button className="btn btn-danger" onClick={() => eliminarCurso(curso.id)} >Eliminar</button>     

    </div>

    </>
    )

}
