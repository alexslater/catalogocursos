import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({curso, mostrarSiguiente, mostrarAnterior}) => {

  return (  
  <>
    <div key={curso.id} className='card'>
        <h5 className='card-title'>{curso.nombre_curso}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">$ CLP {curso.valor}</h6>
        <p className='card-text'>Horas: {curso.horas}</p>
        <div className="col">

        </div>
        <ItemCount />
        <button className="btn btn-primary" onClick={mostrarSiguiente}>Ver siguiente</button>
        <button className="btn btn-primary" onClick={mostrarAnterior}>Ver anterior</button>
       

    </div>

    </>
    )

}
