import React, {useState} from "react";
import usuario from './usuario.svg'
import modo from './modo.svg'
import './navbar.css'
import logo from './logo.svg';
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return(
        <nav className="nav">
            <a href="#" className="nav_brand"><img src={logo} id='img' /></a>
            <ul className={active}>
                <li className="nav_item"><a href="./navbar.jsx" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Comércios</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Hospede</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Cadastre-se</a></li>
            </ul>
            <div className="botoes" method="post">
        <button className="modo"><img src={modo} id="modo"/> </button>
         <button className="usuario"> <img src={usuario} id="usuario"/></button>
            </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>
        </nav>
    );
}
export default Navbar;