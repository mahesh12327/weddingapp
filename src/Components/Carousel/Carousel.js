import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";

import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import slide4 from "../Images/slide4.jpg";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Carousel">
        <Slider {...settings}>
          <div>
            <img className="slide" src={slide1} alt="slide1"></img>
          </div>
          <div>
            <img className="slide" src={slide2} alt="slide2"></img>
          </div>
          <div>
            <img className="slide" src={slide3} alt="slide3"></img>
          </div>
          <div>
            <img className="slide" src={slide4} alt="slide4"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
