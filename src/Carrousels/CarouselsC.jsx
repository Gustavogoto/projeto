import { } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import cha from "../imagens/cha.jpg"
import casal from "../imagens/casal.jpg"
import livro from "../imagens/livro.jpg"



function CarouselsC() {

  return (
    <div>
        <Carousel >
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={livro} alt='carro' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={casal} alt='carro' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={cha} alt='carro' />
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselsC;