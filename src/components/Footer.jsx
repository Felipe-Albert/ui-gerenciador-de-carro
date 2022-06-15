import './footer.css';
import React from "react";
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <ul className="list_social">
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <p><span>Gerenciador de carros</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer;