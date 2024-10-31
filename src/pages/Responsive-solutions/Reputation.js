import React from 'react';
import { useTheme, toggleTheme } from '../../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import "../Listen-Services/listening.css"
import Navbar from '../../components/nav';
import GetTouch from '../../components/getTouch';


const Reputation = () => {
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
        <div className='reputation-content'>
            <Navbar />
            <div className="sec-1">
                <h2>Reputation Management</h2>
                <p>We offer the necessary tools specialized in Reputation Management to help you safeguard your brand’s
                    image, address potential threats, and build a positive, lasting impression
                </p>
                <a href='contact'><button class="book-call">Contact Us</button></a>
            </div>

            <div className="power-house amp-power">
                <div className="power-content">
                    <h5 className="amp-h2">Why is Reputation<br /> Management Important?</h5>
                    <p className="amp-p">Why is Reputation Management Important?
                        Maintaining a positive reputation is crucial for your brand’s success. We provide tailored
                        strategies designed to keep your brand’s reputation intact and ensure it remains resilient against
                        crises and risks</p>

                </div>
            </div>

            <div className="monitoring competitive">
                <h5>How to Implement Reputation Management?</h5>
                <p>We build strategic approaches tailored to your company’s unique needs backed by the research and insights
                    capabilities of TERM
                </p>
                <div class="monitoring-content">
                    <div class="monitoring-card">
                        <h4>Crisis Response Organization</h4>
                    </div>
                    <div class="monitoring-card">
                        <h4>PR Campaigns Planning</h4>
                    </div>
                    <div class="monitoring-card">
                        <h4>Transparency Initiatives Design</h4>
                    </div>
                    <div class="monitoring-card">
                        <h4>Stakeholder Communication Guidelines</h4>
                    </div>
                    <div class="monitoring-card">
                        <h4>Wording and Semantic Field Design</h4>
                    </div>
                    <div class="monitoring-card">
                        <h4>Reputation Repair</h4>
                    </div>

                </div>
            </div>

            <div className="" id="getIn">
                <GetTouch />
            </div>
            <div className="self-services">
                <h3>Marketing Mix Modeling Solutions</h3>
                <p>Optimize your marketing strategy with our cutting-edge Marketing Mix Modeling Solutions. Harness the
                    power of data to balance your marketing and media mix, ensuring every dollar is well spent for maximum
                    impact.
                </p>
                <a href='/mass-analytics'><button>Elevate Your Strategy Today!</button></a>
            </div>
        </div>

    </div>;
};

export default Reputation;
