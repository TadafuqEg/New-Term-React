import React from 'react';
import { useTheme, toggleTheme } from '../../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../../App.css";
import "./listening.css"
import Navbar from '../../components/nav';
import Gettouch from '../../components/getTouch';


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
                <h2>Reputation & Perception <br /> Monitoring</h2>
                <p>It’s not about spreading information, it’s about maintaining a positive brand image with one of the
                    most powerful tools of our company: Reputation Social Listening. This allows your business to
                    monitor, analyze and make vital digital marketing strategies.
                </p>
                <a href='contact'><button className="book-call">Contact Us</button></a>
            </div>

            <div className="why-listening">
                <div className='listening-content'>
                    <h5 className="h-5">Why reputation & perception <br /> monitoring are so important?</h5>
                    <p className="pp">In the age where social media platforms serve as hubs of public opinion, it is important
                        to
                        understand how your brand/company is perceived online. Reputation social listening enables you to
                        proactively improve your brand image, monitor customer relationships and to detect potential crises
                        early and take the necessary measures before the damage spiral out of control.
                    </p>
                </div>
            </div>
            <div className="monitoring">
                <h5>How do reputation and perception<br /> monitoring work?</h5>
                <p>Our reputation & perception monitoring system offers you innovative approaches to take your brand’s
                    online reputation to new heights.
                </p>
                <div className="monitoring-content">
                    <div className="monitoring-card">
                        <h4>Keyword Tracking</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Sentiment Analysis</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Trend Identification</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Audience Profiling</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Real-time Monitoring</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Risk Alerts</h4>
                    </div>
                    <div className="monitoring-card">
                        <h4>Topics and Themes analysis</h4>
                    </div>
                </div>
            </div>

            <div className="" id="getIn">
                <Gettouch />
            </div>
            <div className="self-services">
                <h3>Self-Service Social Listening & Profiling Platform</h3>
                <p>Unlock the power of real-time insights with our Self-Service Social Listening & Profiling Platform. Stay
                    ahead of the competition by understanding your audience, monitoring your brand's reputation, and
                    identifying key influencers—all in one intuitive dashboard.
                </p>
                <a href='/hoo-talk'><button>Take Control Today!</button></a>
            </div>
        </div>

    </div>;
};

export default Reputation;
