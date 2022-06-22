import './parceria.css'
import centro from './Centro.jpg'
import leste from './leste.jpg'
import oeste from './Oeste.jpg'

function Parcerias(){
return(

    <section className='parceria1'>
            <div>
            <h3 className="Leitura_parcerias">Parcerias</h3>
        </div>
    <div className="Negocios_parcerias1">

    <div class="parceria 2 ">
    <div class="card_parceria" >
  <img src={leste} class="card-img-top_parceria" alt="..."/>

  </div>
  </div>

    <div class="parceria 3">
    <div class="card_parceria" >
  <img src={centro} class="card-img-top_parceria" alt="..."/>
</div>
    </div>   
    <div class="parceria 4">
    <div class="card_parceira" >
  <img src={oeste} class="card-img-top_parceria" alt="..."/>
  </div>
</div>
  </div>

    </section>
)
}
export default Parcerias;