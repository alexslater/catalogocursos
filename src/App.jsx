import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton/Boton'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import Cart from './components/Cart/Cart'
import './css/style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {

  return (

    <CartContextProvider>  
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/:categoriaID" element={<ItemListContainer />} />
          <Route path="/detalle/:idcurso" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h1>No existe esta ruta!</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
