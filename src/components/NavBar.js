import React from "react";
import logo from '../assets/carro.jpg';
import { Link } from "react-router-dom";

function NavBar() {
    return (
            <nav className="div_navbar">
                    <Link to="home">
                        <img src={logo} alt="carro" />
                    </Link>
                    <ul className="list">
                        <li className="links">
                            <Link to="home">Home</Link>
                        </li>
                        <li className="links">
                            <Link to="cadastrar">Cadastrar</Link>
                        </li>
                    </ul>
            </nav>
    )
}

export default NavBar;