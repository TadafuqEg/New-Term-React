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

const Mrkets = () => {
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
                            <li className="mark-active"><a href="">Cryptocurrency</a></li>
                            <li><a href="./banking-insurance">Banking / Insurance</a></li>
                            <li><a href="./education">Education</a></li>
                            <li><a href="airlines">Airlines</a></li>
                            <li><a href="mass-retail">Mass Retail</a></li>
                            <li><a href="./telco">Telco</a></li>
                            <li><a href="./oil-gas">Oil & Gas</a></li>
                            <li><a href="./theme-amusement-parks">Theme/Amusement Parks</a></li>
                            <li><a href="./FMCG">FMCG</a></li>
                            <li><a href="./luxury">Luxury</a></li>
                        </ul>
                    </div>
                    
                    <div className="abs">
                    </div>
                    <h5 className="mark-h5">Cryptocurrency</h5>
                    <p>A prominent cryptocurrency exchange sought to enhance its reputation and adapt to shifting market
                        dynamics amidst increasing regulatory scrutiny.</p>
                    <a href="/contact"><button className="crypt">Talk to our experts</button></a>
                </div>
                <div className='market-owl'>

                    <div className="slider-container">
                        <h2 className='cont-h'>Markets</h2>
                        <Slider className="sss" {...settings}>
                            <div>
                                <a href="">
                                    <p className='active-s'>Cryptocurrency</p>
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
                                    <p>Mass Retail</p>
                                </a>
                            </div>
                            <div>
                                <a href="/telco">
                                    <p>Telco</p>
                                </a>
                            </div>
                            <div>
                                <a href="/oil-gas">
                                    <p>Oil & Gas</p>
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
                        </Slider>
                    </div>
                    <div className='marketowl-content'>
                        <h5 className="mark-h5">Cryptocurrency</h5>
                        <p>A prominent cryptocurrency exchange sought to enhance its reputation and adapt to shifting market
                            dynamics amidst increasing regulatory scrutiny.</p>
                        <a href="/contact"><button className="crypt">Talk to our experts</button></a>
                    </div>
                </div>
            </div>
            <div className="mark-content">
                <div className="markets-cards">
                    <div className="mark-card">
                        <h5>Client Challenges :</h5>
                        <ul>
                            <li>Managing negative perceptions and misinformation.</li>
                            <li>Navigating the complex landscape of regulatory changes and market volatility.</li>
                        </ul>
                    </div>
                    <div className="mark-card c-l">
                        <h5>Services & Solutions Provided :</h5>
                        <ul>
                            <li>Reputation & Perception Monitoring: Implemented real-time social listening to track public
                                sentiment and regulatory discussions.
                            </li>
                            <li>
                                Reputation Management: Developed targeted mitigation strategies and proactive content to
                                address negative perceptions and build trust.
                            </li>
                        </ul>
                    </div>
                    <div className="mark-card">
                        <h5>Results & Impact :</h5>
                        <ul>
                            <li>Improved public perception and regulatory compliance.</li>
                            <li>Enhanced brand reputation and user trust in a volatile market.</li>
                        </ul>
                    </div>
                    <a href="/contact"><button className="crypt-2">Talk to our experts</button></a>
                </div>
            </div>

        </div>
    </div>;
};

export default Mrkets;
