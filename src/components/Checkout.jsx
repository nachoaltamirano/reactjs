import { useContext, useState } from "react";
import { CartContext } from "./contexto/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import Swal from 'sweetalert2';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("")
    const [orderId, setOrderId] = useState("")
    const {cart, clear, totalAPagar} = useContext(CartContext);



    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:celular};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:totalAPagar()}; 

        if (nombre.length !== 0 && email.length !== 0 && celular.length !== 0) {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(data => {
                setOrderId(data.id);
                clear();
                setNombre("")
                setCelular("")
                setEmail("")
    
            
    
                
            });
        }else {
            Swal.fire(
                'Error', 'Debe ingresar los datos correctos', 'error'
            )
        }

    

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
                        </tr>
                        )
                }
            <tr>
                <td className="text-end">Total a pagar: <b>${totalAPagar()}</b> </td>
                </tr>
                </tbody>
        </table>
        <div className="container">
            <form>
                <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" onInput={(e) => {
                    setNombre(e.target.value)}} />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" onInput={(e) => {
                    setEmail(e.target.value)}} />
                </div>
                <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input type="text" className="form-control" id="celular" onInput={(e) => {
                    setCelular(e.target.value)}} />
                </div>
        </form>
        <button className="btn btn-danger" onClick={generarOrden}>Generar orden</button>
        </div>
        {orderId ? <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="alert alert-danger my-5" role="alert"><h4>¡Gracias por tu compra!</h4> <p>Se ha generado una orden de compra con el siguiente ID:{orderId}</p></div>
                </div>
            </div>
        </div> : ""}
        </div>
        
    )
}


export default Checkout;