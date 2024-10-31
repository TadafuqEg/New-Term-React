import React from 'react';
import { useTheme, toggleTheme } from '../../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import "../Listen-Services/listening.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../components/ManualSlider.css';
import Navbar from '../../components/nav';

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


const Oil = () => {
    const { theme, toggleTheme } = useTheme();

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

    return <div id='togg' className={`page ${theme}`}>
        <div className='fixxed'>
            <a href='login'> <IoPerson className='person' /></a>
            <a> <FaCartShopping className='basket' /> </a>
            <svg onClick={toggleTheme} stroke="currentColor" stroke-width="0" viewBox="0 0 16 16"
                className="dark-toggle hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer"
                height="26" width="26" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z">
                </path>
                <path
                    d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z">
                </path>
            </svg>
        </div>
        <div>
            <Navbar />
            <div className="markets">
                <div className="markets-content">
                    <div className="markets-items">
                        <ul>
                            <li className='bold'>
                                Markets |
                            </li>
                            <li><a href="/markets-cryptocurrency">Cryptocurrency</a></li>
                            <li><a href="/banking-insurance">Banking / Insurance</a></li>
                            <li><a href="./education">Education</a></li>
                            <li><a href="airlines">Airlines</a></li>
                            <li><a href="mass-retail">Mass Retail</a></li>
                            <li><a href="./telco">Telco</a></li>
                            <li className="mark-active"><a href="./oil-gas">Oil & Gas</a></li>
                            <li><a href="./theme-amusement-parks">Theme/Amusement Parks</a></li>
                            <li><a href="./FMCG">FMCG</a></li>
                            <li><a href="./luxury">Luxury</a></li>
                        </ul>
                    </div>
                    <div className="abs">
                    </div>
                    <h5 class="mark-h5">Oil & Gas</h5>
                    <p>A major oil and gas company aimed to enhance its public image and manage regulatory challenges effectively.</p>
                    <a href="/contact"><button class="crypt">Let's Talk</button></a>
                </div>
                <div className='market-owl'>
                    <div className="slider-container">
                        <h2 className='cont-h'>Markets</h2>
                        <Slider className="sss" {...settings}>
                            <div>
                                <a href="">
                                    <p className='active-s'>Oil & Gas</p>
                                </a>
                            </div>
                            <div>
                                <a href="/theme-amusement-parks">
                                    <p>Theme/Amusement Parks</p>
                                </a>
                            </div>
                            <div>
                                <a href="/fmcg">
                                    <p>FMCG</p>
                                </a>
                            </div>
                            <div>
                                <a href="/luxury">
                                    <p>Luxury</p>
                                </a>
                            </div>
                            <div>
                                <a href="/markets-cryptocurrency">
                                    <p>Cryptocurrency</p>
                                </a>
                            </div>
                            <div>
                                <a href="/banking-insurance">
                                    <p>Banking / Insurance</p>
                                </a>
                            </div>
                            <div>
                                <a href="/education">
                                    <p>Education</p>
                                </a>
                            </div>
                            <div>
                                <a href="/airlines">
                                    <p>Airlines</p>
                                </a>
                            </div>
                            <div>
                                <a href="/mass-retail">
                                    <p >Mass Retail</p>
                                </a>
                            </div>
                            <div>
                                <a href="/telco">
                                    <p>Telco</p>
                                </a>
                            </div>
                        </Slider>
                    </div>
                    <div className='marketowl-content'>
                        <h5 class="mark-h5">Oil & Gas</h5>
                        <p>A major oil and gas company aimed to enhance its public image and manage regulatory challenges effectively.</p>
                        <a href="/contact"><button class="crypt">Let's Talk</button></a>
                    </div>
                </div>
            </div>
            <div class="mark-content">
                <div class="markets-cards">
                    <div class="mark-card">
                        <h5>Client Challenges :</h5>
                        <ul>
                            <li>Managing public perception and regulatory compliance.</li>
                            <li>Addressing environmental and operational concerns.</li>
                        </ul>
                    </div>
                    <div class="mark-card c-l">
                        <h5>Services & Solutions Provided :</h5>
                        <ul>
                            <li>
                                Reputation & Perception Monitoring: Monitored public sentiment and regulatory discussions to
                                manage the company's reputation.
                            </li>
                            <li>
                                Mitigation and Fight-back Marketing Strategies: Developed proactive communication strategies and
                                campaigns to address negative perceptions and highlight positive initiatives.
                            </li>
                        </ul>
                    </div>
                    <div class="mark-card">
                        <h5>Results & Impact :</h5>
                        <ul>
                            <li>Improved public image and regulatory compliance.</li>
                            <li>Enhanced reputation and stakeholder relations.</li>
                        </ul>
                    </div>
                    <a href="/contact"><button class="crypt-2">Let's Talk</button></a>
                </div>
            </div>
        </div>
    </div>;
};

export default Oil;
