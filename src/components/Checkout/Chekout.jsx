import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const Checkout = () => {
    

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [orden, setOrden] = useState("")

    const {cart, setCart} = useContext(CartContext)
    
    const handleSubmit = async (e) => {
        
        e.preventDefault()

        const usuario = {
            nombre,
            mail,
            direccion
        }
        const orden = {
            cart, usuario
        }

        const orderRef = collection(db, "ordenes")
        const orderID = await addDoc(orderRef, orden)
        setOrden(orderID)

        setDireccion("")
        setMail("")
        setNombre("")
        setCart([])

        if(orden)
        {
            <h1>Gracias por tu compra!</h1>
        }
    }

    return (

        <div>
            <h3>Ingresa los datos para temrinar la compra</h3>
            <form onSubmit={(e) => handleSubmit(e) } >
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre"  onChange={(e) => setNombre(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={(e) => setMail(e.target.value)} />
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" name="direccion" onChange={(e) => setDireccion(e.target.value)}/>
            </form>
            <button className='btn btn-primary' type='sumbit' onClick={handleSubmit} >Enviar</button>
        </div>
    )
}

export default Checkout
