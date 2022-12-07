import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function DetailPage() {
  const [index, setIndex] =useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="card-carousel">
      <Carousel.Item>
        <div style={{display: "flex"}}>
          <span className='m-3' style={{width: "100%"}} >
        <img
          className="d-block w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur47lwC0ZEBPCrcP9u5nZRkS0PXDKcs4KpnqUicNUME4Re7l53fl81kmGn8hTIpn1-S0&usqp=CAU"
          alt="First slide"
          style={{width: "30%"}}
        />
        </span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: "flex"}}>
          <span className='m-3' style={{width: "100%"}} >
        <img
          className="d-block w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQDIlmMmQdAc5hB324W99Ysep8_gPW4JpUQ&usqp=CAU"
          alt="Second slide"
          style={{width: "30%"}}
        />
        </span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display: "flex"}}>
          <span className='m-3' style={{width: "100%"}} >
        <img
          className="d-block w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVl0KDpMwIW-lbkbVnFk6xtqCsWF_d2C4zWb6V7b7qkPJkecxFIdMgpD05iZwEhkH7lc&usqp=CAU"
          alt="Third slide"
          style={{width: "16.7%"}}
        />
        </span>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DetailPage