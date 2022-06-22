import "./carroselmodule.css"
import lan from './lanhouse.jpg'
import seta from'./chevron1.svg'
import seta1 from'./chevron2.svg'
import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import { FaStarHalf, FaStar } from "react-icons/fa";
import estrela from "./estrela 1.svg"
let porcent=20


function star(){
if (porcent>=10){

}  else if(porcent>=20){
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
}if (porcent>=30){

 
  }  else if(porcent>=40){

  }if (porcent>=50){

    }  else if(porcent>=60){

    
    }if (porcent>=70){
    
      }  else if(porcent>=80){
 
      }if (porcent>=90){

        }  else if(porcent>=100){

        }
}


function Negocio() {
    return(
    <section className="carrossel-mes">
        <div>
            <h3 className="Negocios_carossel">Negócios de Destaque esse Mês</h3>
            <div className="linha01_carossel"></div>
        </div>
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
    <div className="Destaque 3">
<div className="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Restaurante</p>
<h3 className="card-title"><a href="#" className="card-title-oficce" id="#card-title-oficce">Lanchonete Bom Lanche</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
  
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 3">
<div className="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Mercados</p>
<h3 className="card-title" id="card-title"><a href="#" className="card-title-oficce" id="#card-title-oficce">Floricultura do Eduardo</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 3">
<div className="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Mercados</p>
<h3 className="card-title"><a href="#" className="card-title-oficce" id="#card-title-oficce">Floricultura do Eduardo</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque 4">
<div className="card_negocio1">
<img src={lan} className="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Beleza</p>
<h3 class="card-title"><a href="#" className="card-title-oficce" id="#card-title-oficce">Salão Hair</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>
</div>
    </div>
    <div>
    <div className="Destaque5">
<div className="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div className="card-body">
     <p className="card-text_negocio">Roupas</p>
<h3 className="card-title"><a href="#" className="card-title-oficce" id="#card-title-oficce">Boys and Girls</a></h3>
<div className="Estrela">
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
<img className="avaliacao" src={estrela} alt="" />
</div>
</div>
</div>

</div>
    </div>
  </InfiniteCarousel>
    </section>
    )
}
export default Negocio;