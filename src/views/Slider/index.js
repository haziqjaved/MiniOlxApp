import React,{ useState} from 'react';
import {Carousel} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Slider() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(<>
      <Carousel activeIndex={index} onSelect={handleSelect} className='mt-2'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../Assets/Carousel1.jpg").default}
          height='300'
              alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../Assets/Carousel2.jpg").default}
          height="300"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../Assets/Carousel3.jpg").default}
          height="300" 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </>) 
}