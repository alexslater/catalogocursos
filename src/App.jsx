import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton/Boton'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'


function App() {

  return (
    <div className='container'>
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <h2>Agrega la cantidad de cursos que deseas comprar:</h2>
        <ItemCount />
      </div>
    </div>

  )
}

export default App
