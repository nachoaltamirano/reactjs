import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./contexto/CartContext";


const Cart = () => {
    const {cart, totalCart, removeItem, clear, totalAPagar} = useContext(CartContext);



    



    if (totalCart() === 0 ) {
        return(
            <div>
                <p className="carrito-vacio">Tu carrito esta vacio</p>
            </div>
        )
    }

    return (
        <div className="container">
        <table className="table">
            <thead>
            <tr>
                <td>&nbsp;</td>
                <td>Nombre</td>
                <td>Cantidad</td>
                <td>Precio</td>
                
                <td>Subtotal</td>
                <td>&nbsp;</td>
                
            </tr>
            </thead>
            <tbody>
            
                {
                    cart.map(item =>
                        <tr className="" key={item.id}>
                            
                            <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                            <td>{item.nombre}</td>
                            <td>{item.quantity}</td>
                            <td>${item.precio}</td>
                            <td>${item.precio * item.quantity}</td>
                            <td><Link onClick={() => {removeItem(item.id)}}><i className="bi bi-trash-fill"></i></Link></td>
                            
                        </tr>
                        )
                }
            
            <tr>
                <td><Link className="btn btn-danger" to={"/checkout"}>Finalizar compra</Link></td>
                <th><button type="buttom" className="btn btn-danger" onClick={() => {clear()}}>Vaciar Carrito</button></th>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className="text-end">Total a pagar: <b>${totalAPagar()}</b> </td>
                
                </tr>
                </tbody>
        </table>
        </div>
        
    )
}


export default Cart;