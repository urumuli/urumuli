import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, // Show only 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For larger screens
        settings: {
          slidesToShow: 2, // Show 2 slides on larger screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440, // For even larger screens
        settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920, // For very large screens
        settings: {
          slidesToShow: 4, // Show 4 slides on very large screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <div className='box product' key={index}>
              <div className='img'>
                <img src={value.cover} alt={value.name} width='100%' />
              </div>
              <h4>{value.name}</h4>
              <span>{value.price}</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;