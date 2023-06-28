import { useContext } from "react";
import { CartContext } from "./contexto/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

const {addItem} = useContext(CartContext);

const onAdd = (quantity) => {
    addItem(item, quantity)
}


    return (
        <div className="producto-a">
        <img src={item.imagen} alt={item.nombre} className="producto-imagen" />
        <div className="producto-detalles">
            <h3 className="producto-titulo">{item.nombre}</h3>
            <p className="producto-precio">${item.precio}</p>
        </div>
        <div>
            <ItemCount stock={4} onAdd={onAdd} />
        </div>
    </div>
    )
}


export default ItemDetail;