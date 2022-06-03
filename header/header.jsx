import React from "react";
import './header.css'
import img from"./searchicone.svg"
import mulher from './mulher1.png'

function Header() {
    return(
        <header className="header">
        
            <h1>Descubra lugares incríveis</h1>
            <h2>Busque aqui os melhores comércios da região</h2>
     
            <form action='/' method='post'>
  <input type='text' name='pesquisa' placeholder='O que você procura?'/>
  <button type='submit'><img src={img} alt="" srcset=""id='lupa' /></button>
</form>

<img src={mulher} className='img'alt="" />

    </header>
    )
    }
export default Header;