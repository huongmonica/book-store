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
            <span>Many language books have arrived!</span>
          </h3>
          <span>Check out our latest language book collection now!</span>
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
            <span>Summer time!</span>
          </h3>
          <span>Pick some books from our book store and enjoy the summer!</span>
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
            <span>Webstore opening event</span>
          </h3>
          <span>Come and get the best deals ever!</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselBook;
