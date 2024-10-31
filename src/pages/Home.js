// src/pages/Home.js
import React, { useState , useEffect, useRef } from 'react';
import { useTheme, toggleTheme } from '../context/ContextTheme';
import MyCarousel from '../components/owlCurosel';
import Gettouch from '../components/getTouch';
import "../App.css";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import img11 from '../assets/imgs/img3-2.png';
import img1 from '../assets/imgs/img3.png';
import img22 from '../assets/imgs/img4-2.png';
import img2 from '../assets/imgs/img4.png';
import Navbar from '../components/nav';



const Home = () => {
    const { theme, toggleTheme } = useTheme();
    const sec3LeftRef = useRef(null);
    const sec3RightRef = useRef(null);
    const sec4LeftRef = useRef(null);
    const sec4RightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe each target element
        if (sec3LeftRef.current) observer.observe(sec3LeftRef.current);
        if (sec3RightRef.current) observer.observe(sec3RightRef.current);
        if (sec4LeftRef.current) observer.observe(sec4LeftRef.current);
        if (sec4RightRef.current) observer.observe(sec4RightRef.current);
    }, []);


    return <div id='togg' className={`page ${theme}`}>
        <div className='fixxed'>
            <a href='/login'> <IoPerson className='person' /></a>
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
        <div className='home'>
             <Navbar />
            <div className='sec-1'>
                <h2>Listen, Respond, Succeed</h2>
                <p>
                    We provide the perfect combination of data-driven insights and human expertise to enable
                    our clients to make strategic decisions backed by comprehensive evidence
                </p>
                <a href='/contact'><button>Book a Call</button></a>
                <span className='line-1'></span>
            </div>
            <div className='sec-2'>
                <div className='sec2-left'>
                    <h3>What we do?</h3>
                    <p>
                        At TERM, we're dedicated to listening, acting, and ensuring our clients' success. We redefine
                        audience engagement by uncovering growth opportunities through advanced social listening,
                        comprehensive consumer research, and strategic consultancy.
                    </p>
                    <p>
                        While our insights empower you to align your brand, marketing, and product strategies with consumer
                        demands and market dynamics, our responsive solutions equip you with tools for influencing and
                        safeguarding your brand's reputation among your target audiences.
                    </p>
                    <p>
                        This holistic approach ensures that your business decisions are informed and effective and that you are
                        empowered to grow and protect your brand and market position.
                    </p>
                </div>
                <div className='sec2-right'>
                    <h5>Read our case studies</h5>
                    <p>Why we the trusted strategic insights partner for global brands and agencies</p>
                    <a href='/success'><button>Read our case studies</button></a>
                </div>
            </div>
            <div className='sec-3'>
                <h3>Our Services & Solutions</h3>
                <div className='sec3-content'>
                    <div ref={sec3LeftRef} className='sec3-left slide-in-left'>
                        <img
                            src={theme === 'light' ? img1 : img11}
                            alt="icon"
                        />
                        <h5>Listening Services</h5>
                        <ul>
                            <li>Reputation & perception monitoring</li>
                            <li>Competitive intelligence</li>
                            <li>Marketing campaign evaluation</li>
                            <li>Risk & Crisis recognition and anticipation</li>
                            <li>Risk & Crisis recognition and anticipation</li>
                            <li>Authenticity analysis and bots detection</li>
                        </ul>
                        <p>Self- service Social listening & Profiling Platform</p>
                    </div>
                    <div ref={sec3RightRef} className='sec3-right slide-in-right'>
                        <img
                            src={theme === 'light' ? img2 : img22}
                            alt="icon"
                        />
                        <h5>Responsive Solutions</h5>
                        <ul>
                            <li>Amplification, Mitigation and fight-back Marketing Strategies</li>
                            <li>Reputation management</li>
                            <li>Tactical Content campaigns</li>
                            <li>Bots Neutralisation</li>
                            <li>Influence marketing operations</li>
                            <li>Large scale micro-targetting</li>
                        </ul>
                        <p>Marketing Mix Modeling solutions</p>
                    </div>
                </div>
            </div>
            <div className='sec-4'>
                <div className='sec4-content'>
                    <div ref={sec4LeftRef} className='sec4-left slide-in-left'>
                        {/* <img src={img3} /> */}
                    </div>
                    <div ref={sec4RightRef} className='sec4-right slide-in-right'>
                        <h4>What Makes Us Special?</h4>
                        <h3>The Best Technology (WebInt, OSInt, and Artificial Intelligence)</h3>
                        <p>
                            Our solution combines industry-leading data collection tools, whether
                            through APIs or crawling, to deliver complete and unrivaled tracking.
                        </p>
                        <h3>The Best Marketing Experts (Human Intelligence)</h3>
                        <p>
                            Our experts engage at every stage of the process, from refining search parameters
                            during data collection to identifying actionable insights and optimizing machine
                            learning through systematic data reviews.
                        </p>
                        <h3>The Best of Technological Know-How (Tadafuq) and Marketing Expertise (Elka)</h3>
                        <p>
                            We seamlessly integrate cutting-edge technological capabilities with top-tier research
                            and marketing expertise to deliver exceptional results.
                        </p>
                        <a href='#getIn'><button>Get in Touch</button></a>
                    </div>
                </div>
            </div>
            <div className='sec-5'>
                <h5 className='sec5-h5'>What Makes Us Unique?</h5>
                <div class="unique-flip-cards">
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Multicultural & Multilanguage Team</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Multicultural & Multilanguage Team</h5>
                                <div class="div-1">
                                    <p>Our diverse team hails from over 20 countries, ensuring thorough linguistic
                                        reviews
                                        of data to accurately attribute and categorize information as necessary.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Dedicated Success Managers</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Dedicated Success Managers</h5>
                                <div class="div-1">
                                    <p>Our dedicated customer service is always here to answer your questions and work
                                        with
                                        you on the Journey.F
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Tailor Made Reports</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Tailor Made Reports</h5>
                                <div class="div-1">
                                    <p>Unlike other providers, we prioritize targeted social listening with a purpose.
                                        We
                                        don't just flood you with data; we deliver key insights that empower you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Short Cycle</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Short Cycle</h5>
                                <div class="div-1">
                                    <p>We blend human expertise with AI-driven technologies to provide faster insights
                                        and
                                        enabling you to anticipate real-time shifts in consumer behavior.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Dynamic Scope</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Dynamic Scope</h5>
                                <div class="div-1">
                                    <p>Flexibility and customer centricity are our moto on building long term social
                                        listening strategies with our
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flip-cards">
                        <div class="card-container">
                            <div class="front">
                                <h5>Wide Coverage</h5>
                            </div>
                            <div class="back">
                                <h5 class="adres">Wide Coverage</h5>
                                <div class="div-1">
                                    <p>Our technology uniquely combines web crawling and platform APIs, utilizing two
                                        distinct data collection approaches to maximize the extraction of information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#getIn" className='get-touch'><button>Get in Touch</button></a>
            </div>
            <div className='sec-6'>
                <MyCarousel />
            </div>
            <div id='getIn' className='sec-7'>
               <Gettouch />
            </div>
        </div>

    </div>;
};
export default Home;
