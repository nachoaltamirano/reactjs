import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
const [items, setItems] = useState(1);
const [itemStock, setItemStock] = useState(stock);
const [itemAdd, setItemAdd] = useState(false);

const incrementarStock = () => {
    if (items < itemStock) {
        setItems(items + 1);
    }
}

const decrementarStock = () => {
    if (items > 1) {
        setItems(items - 1);
    }
}

const addToCart = () => {
    if (itemStock >= items) {
        setItemStock(itemStock - items);
        setItems(1);
        setItemAdd(true);
        onAdd(items)
        
    }
}

useEffect(() => {
    setItemStock(stock);
}, [stock]);

return (
    <div className="container">
        <div className="row my-1">
            <div className="col">
                <div className="btn-group">
                    <button className="btn colorboton" onClick={decrementarStock}>-</button>
                    <button className="btn colorboton">{items}</button>
                    <button className="btn colorboton" onClick={incrementarStock}>+</button>
                </div>
            </div>
        </div>
        <div className="row my-1">
            <div className="col">
                {itemAdd ? <Link to={"/cart"} className="btn colorboton">Terminar la compra</Link> : <button className="btn colorboton" onClick={addToCart}>Agregar Al Carrito</button>}
            </div>
        </div>
    </div>
)
}

export default ItemCount;