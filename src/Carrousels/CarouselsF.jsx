import { } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import girl from "../imagens/girl.jpg"
import flor from "../imagens/flor.jpg"
import feminino from "../imagens/feminino.jpg"


function CarouselsF() {

  return (
    <div>
        <Carousel >
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={girl} alt='carro' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={flor} alt='carro' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={feminino} alt='carro' />
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselsF;