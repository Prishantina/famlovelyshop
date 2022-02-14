import React from "react";
import logo from "../logo-fam/logo.png";
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="Header">
            <header>
                <Link to='/'>
                <img src={logo} alt="logo" width="180px" />
                </Link>
                  
            </header>
        </div>

    );

};
export default Header;