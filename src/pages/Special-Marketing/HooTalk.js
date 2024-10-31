import React from 'react';
import { useTheme, toggleTheme } from '../../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import "../Listen-Services/listening.css";
import img1 from '../../assets/imgs/hootook.svg';
import Navbar from '../../components/nav';


const HooTalk = () => {
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
                <h2>Self-Service Social Listening & Profiling Platform</h2>
                <p>Unlock the power of real-time insights with our Self-Service Social Listening & Profiling Platform.
                    Stay ahead of the competition by understanding your audience, monitoring your brand's reputation,
                    and identifying key influencers—all in one intuitive dashboard.
                </p>
                <a href="https://www.hoo-talk.com/"><button class="book-call">Take Control Today!</button></a>
                <span className='line-1'></span>
            </div>
            <div class="hoo-content">
                <div class="hoo-cards">
                    <div class="hoo-card">
                        <h5>Real-time Monitoring</h5>
                        <p>Stay updated with instant alerts and detailed reports.</p>
                    </div>
                    <div class="hoo-card ho-2">
                        <h5>Comprehensive Analytics</h5>
                        <p>Gain actionable insights to drive your strategy.</p>
                    </div>
                    <div class="hoo-card">
                        <h5>User-Friendly Interface</h5>
                        <p>Easy to navigate, even for beginners.</p>
                    </div>
                    <div class="hoo-card ho-2">
                        <h5>Cost-Effective Solution</h5>
                        <p>High-quality tools at an affordable price.</p>
                    </div>
                    <p class="hoo-p">Don't miss out on the opportunity to elevate your brand and make data-driven decisions
                        with confidence.</p>
                    <a href="https://www.hoo-talk.com/"><button>Get Started Now</button></a>
                </div>

            </div>

        </div>

    </div>;
};

export default HooTalk;
