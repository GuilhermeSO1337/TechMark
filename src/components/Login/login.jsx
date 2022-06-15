import './login.css'
import svg from './close.svg'

function Login() {
    function fechar(){
    document.querySelector('.login').style.display = "none";}
    return(
        <section className="login">
        <button className="close" onClick={fechar}><img src={svg} alt="" /></button>
          <h2 id="login1">Fazer Login</h2>  
          <form action="" className="login1">
          <input type="email" name="" id="e-mail" placeholder="Digite seu e-mail..."/>
          <input type="password" name="" id="senha" placeholder="Digite sua senha"/> 
            <a href="" className="forget">Esqueceu a senha?</a>     
            <a href="" className="create">Criar conta</a>
            <a href="" className="hn">Hospede seu negócio </a>   
            <button type="submit" className="entrar">Entrar</button>
          </form>
        </section>
    )
    
}
export default Login;