import { } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import camera from "../imagens/camera.jpg"
import fut from "../imagens/fut.jpg"
import Natureza from "../imagens/Natureza.jpg"


function CarouselsM() {

  return (
    <div>
        <Carousel >
            <Carousel.Item id='carrossel'>
              <center>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={camera} alt='carro' />
                </div>
              </center>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
              <center>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={fut} alt='carro' />
                </div>
              </center>
            </Carousel.Item>
            <Carousel.Item id='carrossel'>
              <center>
                <div className='carrousels.img'>      
                    <img className='imagens_carro' src={Natureza} alt='carro' />
                </div>
              </center>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CarouselsM;