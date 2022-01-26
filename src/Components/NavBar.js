import "./NavBar.css";
import CartWidget from "./Cartwidget";
const NavBar = () => {
    return ( 
            <nav className="Navigation">
                <ul> 
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                    <li><CartWidget/></li>
                </ul>
            </nav>   
    ) 
};

export default NavBar;