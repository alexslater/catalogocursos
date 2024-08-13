import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton/Boton'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import './css/style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

    
      <NavBar />
    
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:categoriaID" element={<ItemListContainer />} />
        <Route path="/detalle/:idcurso" element={<ItemDetailContainer />} />

      </Routes>
      
    </BrowserRouter>
    

  )
}

export default App
