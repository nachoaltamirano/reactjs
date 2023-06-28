import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
                <div className="producto">
                    <img src={item.imagen} alt={item.nombre} className="producto-imagen" />
                    <div className="producto-detalles">
                        <h3 className="producto-titulo">{item.nombre}</h3>
                        <p className="producto-precio">${item.precio}</p>
                        <Link className="producto-agregar" to={"/item/" + item.id}>
                        <button className="producto-boton">VER DETALLES</button>
                        </Link>
                    </div>
                </div>

    )
}


export default Item;