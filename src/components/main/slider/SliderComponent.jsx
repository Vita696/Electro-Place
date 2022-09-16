import image1 from "../../../img/slider/Image.png";
import Banner from "./Banner";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div className="main-slider container">
      <div className=" sliderItems">
        <Carousel>
          <Carousel.Item>
            <img
              className="image"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Микроволновая печь HUNDAI</h3>
              <p>Готовьте вкусно и быстро.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src={image1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Микроволновая печь HUNDAI</h3>
              <p>Готовьте вкусно и быстро.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image"
              src={image1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Микроволновая печь HUNDAI</h3>
              <p>Готовьте вкусно и быстро.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Banner />
    </div>
  );
}

export default Slider;
