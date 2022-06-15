import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo2 from './logooficce.svg'
import usuario from './usuario.svg'
import usuario2 from './usuario2.svg'
import modo from './modo.svg'
import modo2 from './modo2.svg'
import './navbar.css'
import logo from './logo.svg'; 
function white() {

  document.querySelector('.nav_link').style.color="";
  document.querySelector('.nav_link1').style.color="";
  document.querySelector('.nav_link2').style.color="";
  document.querySelector('.nav_link3').style.color="";
  document.querySelector('.modo').style.backgroundColor="#fff ";
  document.querySelector('.nav').style.background="#fff ";
  document.querySelector('#img').style.display = "";
  document.querySelector('#img2').style.display = "";
  document.querySelector('#usuario').style.display = "";
  document.querySelector('#modo').style.display = "";
  document.querySelector('#usuario2').style.display = "none";
  document.querySelector('#modo2').style.display = "none";
  document.querySelector('.usuario').style.backgroundColor=" #fff";
  document.querySelector('body').style.backgroundColor=" #fff";
}
function black() {
  document.querySelector('.nav_link').style.color=" #fff";
  document.querySelector('.nav_link1').style.color=" #fff";
  document.querySelector('.nav_link2').style.color=" #fff";
  document.querySelector('.nav_link3').style.color=" #fff";
  document.querySelector('.modo').style.backgroundColor=" #212121";
  document.querySelector('.nav').style.background=" #212121";
  document.querySelector('#img').style.display = "none";
  document.querySelector('#img2').style.display = "block";
  document.querySelector('#usuario').style.display = "none";
  document.querySelector('#modo').style.display = "none";
  document.querySelector('#usuario2').style.display = "block";
  document.querySelector('#modo2').style.display = "block";
  document.querySelector('.usuario').style.backgroundColor=" #212121";
  document.querySelector('body').style.backgroundColor=" #212121";

}

function exibirlogin() {
  document.querySelector('.login').style.display = "block";}

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
            <a href="#" className="nav_brand"><img src={logo} id='img' /><img src={logo2} id='img2'/></a>
            <ul className={active}>
                <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link1">Comércios</a></li>
                <li className="nav_item"><a href="#" className="nav_link2">Hospede</a></li>
                <li className="nav_item"><a href="#" className="nav_link3">Cadastre-se</a></li>
            </ul>
            <div className="botoes" method="post">
        <button className="modo"onMouseEnter={black} onClick={white}> <img src={modo}  id="modo"/><img src={modo2}  id="modo2"/> </button>
         <button className="usuario" onClick={exibirlogin}> <img src={usuario} id="usuario"/><img src={usuario2} id="usuario2"/></button>
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
<img src={modo2} id='modo2' onClick={white}/>