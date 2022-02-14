import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";

const NavBar = () => {
    return(
        <div className="Navigation">
            <nav>
                <ul>
                    <Link to="/" className="Link">Home</Link>
                    <Link to="/Productos" className="Link">Productos</Link>
                    <Link to="/Contacto" className="Link">Contacto</Link>
                    <CartWidget/>
                </ul>
            </nav>
        </div>

    );

};
export default NavBar;