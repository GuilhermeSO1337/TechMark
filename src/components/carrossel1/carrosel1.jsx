import "./carrosel1module.css"
import lan from './lanhouse.jpg'
import React from 'react';
import estrela from "./estrela 1.svg"

import InfiniteCarousel from 'react-leaf-carousel';
function Negocio2() {
    return(
    <section className="carrossel">
        <div>
            <h3 className="Negocios_carossel1">Negócios de Destaque essa Semana</h3>
            <div className="linha01_carossel1"></div>
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
    <div className="Negocios_destaques1">
    <div class="Destaques 1">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
    <div class="Destaque 2 ">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
    <div class="Destaque 3">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
    <div class="Destaque 4">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
    <div class="Destaque 5">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
    <div class="Destaque 6">
<div class="card_negocio1">
<img src={lan} class="card-img-top_negocio" alt="..."/>
<div class="card-body">
     <p class="card-text_negocio">Serviços</p>
<h3 class="card-title"><a href="#">Lan House do Emer</a></h3>
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
export default Negocio2;