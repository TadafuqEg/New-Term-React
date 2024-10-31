// src/components/MyCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './owl.css';
import { useTheme } from '../context/ContextTheme';
import img1 from "../assets/imgs/trust/img41.png";
import img2 from "../assets/imgs/trust/img43.png";
import img3 from "../assets/imgs/trust/img44.png";
import img19 from "../assets/imgs/trust/img45.png";
import img40 from "../assets/imgs/trust/img46.png";
import img4 from "../assets/imgs/trust/img46-2.jpeg";
import img50 from "../assets/imgs/trust/img47.png";
import img5 from "../assets/imgs/trust/img47-2.jpeg";
import img6 from "../assets/imgs/trust/img48.png";
import img7 from "../assets/imgs/trust/img49.png";
import img8 from "../assets/imgs/trust/img50.png";
import img9 from "../assets/imgs/trust/img51.png";
import img10 from "../assets/imgs/trust/img52.png";
import img11 from "../assets/imgs/trust/img53.png";
import img120 from "../assets/imgs/trust/img54.png";
import img12 from "../assets/imgs/trust/img54-2.jpeg";
import img13 from "../assets/imgs/trust/img55.png";
import img14 from "../assets/imgs/trust/img56.png";
import img150 from "../assets/imgs/trust/img57.png";
import img15 from "../assets/imgs/trust/img57-2.jpeg";
import img16 from "../assets/imgs/trust/img58.png";
import img17 from "../assets/imgs/trust/img59.png";
import img18 from "../assets/imgs/trust/img60.png";

const MyCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,          // Default to 6 items on large screens
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,      // Tablet screen
          settings: {
            slidesToShow: 4      // Show 4 items on tablets
          }
        },
        {
          breakpoint: 600,       // Mobile screen
          settings: {
            slidesToShow: 2      // Show 2 items on mobile
          }
        }
      ]
    };
  
    const { theme } = useTheme();
  
    return (
      <div>
        <h5 className="owl-h">They Trusted Us</h5>
        <Slider className="owl" {...settings}>
          <div><img className="owl-img" src={img1} alt="1" /></div>
          <div><img className="owl-img" src={img2} alt="2" /></div>
          <div><img className="owl-img" src={img3} alt="3" /></div>
          <div><img src={theme === 'light' ? img40 : img4} alt="4" className="owl-img" /></div>
          <div><img src={theme === 'light' ? img50 : img5} alt="5" className="owl-img" /></div>
          <div><img className="owl-img" src={img6} alt="6" /></div>
          <div><img className="owl-img" src={img7} alt="7" /></div>
          <div><img className="owl-img" src={img8} alt="8" /></div>
          <div><img className="owl-img" src={img9} alt="9" /></div>
          <div><img className="owl-img" src={img10} alt="10" /></div>
          <div><img className="owl-img" src={img11} alt="11" /></div>
          <div><img src={theme === 'light' ? img120 : img12} alt="12" className="owl-img" /></div>
          <div><img className="owl-img" src={img13} alt="13" /></div>
          <div><img className="owl-img" src={img14} alt="14" /></div>
          <div><img src={theme === 'light' ? img150 : img15} alt="15" className="owl-img" /></div>
          <div><img className="owl-img" src={img16} alt="16" /></div>
          <div><img className="owl-img" src={img17} alt="17" /></div>
          <div><img className="owl-img" src={img18} alt="18" /></div>
          <div><img className="owl-img" src={img19} alt="19" /></div>
        </Slider>
      </div>
    );
  };
  

export default MyCarousel;
