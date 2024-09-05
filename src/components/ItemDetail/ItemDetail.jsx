import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({curso, mostrarSiguiente, mostrarAnterior}) => {

  const {cart, setCart, agregarAlCarro} = useContext(CartContext)

  const handleComprar = (count) => {
    agregarAlCarro({...curso, cantidad: count})
  }

  console.log(cart)

  return (  


  <>
    <div key={curso.id} className='card'>
        <h5 className='card-title'>{curso.nombre_curso}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {curso.valor}</h6>
        <p className='card-text'>Horas: {curso.horas}</p>
        <div className="col">

        </div>
        <ItemCount id={curso.id} handleComprar={handleComprar} />
        <button className="btn btn-primary" onClick={mostrarSiguiente}>Ver siguiente</button>
        <button className="btn btn-primary" onClick={mostrarAnterior}>Ver anterior</button>
       

    </div>

    </>
    )

}
