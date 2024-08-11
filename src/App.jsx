import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton/Boton'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import './css/style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='container'>
      <div className="row">
        <NavBar />
      </div>
      <div className="row border rounded cuadro-texto">
        <h5>Agrega la cantidad de cursos que deseas comprar:</h5>
        <ItemCount />
      </div>
      <div className='row'>
        <ItemListContainer />
      </div>
    </div>

  )
}

export default App
