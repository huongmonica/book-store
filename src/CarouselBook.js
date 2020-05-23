import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import booka from "./img/booka.jpg";
import bookb from "./img/bookb.jpeg";
import bookc from "./img/bookc.jpg";

const CarouselBook = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={booka}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            <span>First slide label</span>
          </h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={bookb}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            <span>Second slide label</span>
          </h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={bookc}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            <span>Third slide label</span>
          </h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselBook;
