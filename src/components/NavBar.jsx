import CardWidget from "./CardWidget"
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="navbar-menu">
            <header>
                <Link className="logo-link" to={"/"}>
                <h1 className="logo">Rayo Store</h1></Link>
            </header>
            <nav>
                <ul className="navbar-links">
                    <li ><NavLink className="navbar-link" to={"/"}>Todos los productos</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/cuchillo"}>Cuchillos</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/guantes"}>Guantes</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/m4"}>M4A4/A1</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/ak-47"}>AK-47</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/awp"}>AWP</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/category/pistolas"}>Pistolas</NavLink></li>
                    <CardWidget />
                </ul>
            </nav>
            <footer>
                <p className="texto-footer"> Altamirano</p>
            </footer>
        </div>
    )
}

export default NavBar