import { } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import camiseta from "../imagens/camiseta.jpg"
import relogio from "../imagens/relogio.jpg"
import tenis from "../imagens/tenis.jpg"
import fashion from "../imagens/fashion.jpg"



function CarouselsO() {

  return (
    <div>
        <Carousel >
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='camiseta' src={camiseta} alt='camiseta' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='relogio' src={relogio} alt='relogio' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='tenis' src={tenis} alt='tenis' />
                </div>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
                <div className='carrousels.img'>      
                    <img className='tenis' src={fashion} alt='tenis' />
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselsO;