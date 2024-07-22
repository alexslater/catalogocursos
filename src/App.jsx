import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton/Boton'


function App() {


  return (
    <>
      <h2>Hola! Bienvenido a la App de Cursos</h2>
      <Boton texto="Primer boton" estiloboton="btn-primary"/>

     </>
  )
}

export default App
