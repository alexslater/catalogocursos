import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartContextProvider  = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarro = (curso) => {
        setCart([...cart, curso])
    }

    const vaciarCarro = () => {
        setCart([])
    }

    const eliminarCurso = (id) => {
        const nuevoCarro = cart.filter(e => e.id !== id)
        setCart(nuevoCarro)
    }

    const mostrarCantidad = () => {
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, curr) => acc + (curr.cantidad*curr.valor), 0)
    }

    return (
        <CartContext.Provider value={{cart, setCart, agregarAlCarro, vaciarCarro, eliminarCurso, mostrarCantidad, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}

