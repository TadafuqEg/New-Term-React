import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ManualSlider.css'; // Add this line if you want to include custom styles for the arrows

// Custom Arrow components
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="arrow left-arrow">◀</i>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="arrow right-arrow">▶</i>
      </div>
    );
  };

const MySlider = () => {
  const settings = {
    dots: false, // Display dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: false, // Automatically scroll through slides
    autoplaySpeed: 3000, // Time between scrolls
    pauseOnHover: true, // Pause on hover
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <a href="/page1">
            <p className='active-s'>Go to Page 1</p>
          </a>
        </div>
        <div>
          <a href="/page2">
            
            <p>Go to Page 2</p>
          </a>
        </div>
        <div>
          <a href="/page3">
            
            <p>Go to Page 3</p>
          </a>
        </div>
        <div>
          <a href="/page4">
            
            <p>Go to Page 4</p>
          </a>
        </div>
        <div>
          <a href="/page5">
           
            <p>Go to Page 5</p>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
