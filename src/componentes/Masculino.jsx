import '../css/Masculino.css'
import CarouselsM from '../Carrousels/CarrouselsM'

function Masculino(){
    return(
        <div className="conteiner">
            <div className='Titulo'> 
                <h1 id='texto'>Masculino</h1> 
             </div>
             <CarouselsM/>
             <div className='opcao'>
              <ul id='lista'>
                <li id='lista-itens'>Camisetas</li>
                <li id='lista-itens'>Calçados</li>
                <li id='lista-itens'>Acessórios</li>
                <li id='lista-itens'>Ofertas</li>
              </ul>
             </div>
          
        </div>
    );
}
export default Masculino;
