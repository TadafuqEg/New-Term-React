import React from 'react';
import { useTheme, toggleTheme } from '../../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import "../Listen-Services/listening.css";
import img1 from '../../assets/imgs/mass.webp';
import Navbar from '../../components/nav';


const Mass = () => {
    const { theme, toggleTheme } = useTheme();

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
        <div className='reputation-content hootalk'>
            <Navbar />
            <div className="sec-1">
                <img className='ho-img' src={img1} loading='lazy' />
                <h2>Marketing Mix Modeling Solutions</h2>
                <p>Optimize your marketing strategy with our cutting-edge Marketing Mix Modeling Solutions. Harness the
                    power of data to balance your marketing and media mix, ensuring every dollar is well spent for
                    maximum impact.
                </p>
                <a className='mass-btn' href="https://mass-analytics.com/"><button class="book-call">Elevate Your Strategy
                    Today!</button>
                </a>
                <span className='line-1'></span>
            </div>
            <div class="hoo-content">
                <div class="hoo-cards">
                    <div class="hoo-card">
                        <h5>Data-Driven Insights</h5>
                        <p>Analyze audience, sales, and impact data for informed decision-making.</p>
                    </div>
                    <div class="hoo-card ho-2">
                        <h5>Optimized Budgeting</h5>
                        <p>Allocate resources effectively to boost ROI.</p>
                    </div>
                    <div class="hoo-card">
                        <h5>Comprehensive Analysis</h5>
                        <p>Understand the effectiveness of each marketing channel.</p>
                    </div>
                    <div class="hoo-card ho-2">
                        <h5>Tailored Recommendations</h5>
                        <p>Get personalized strategies that fit your unique business needs.</p>
                    </div>
                    <p class="hoo-p">Transform your marketing efforts and achieve superior results with precision and
                        confidence.</p>
                    <a href="https://mass-analytics.com/"><button>Start Optimizing Now</button></a>
                </div>

            </div>

        </div>

    </div>;
};

export default Mass;
