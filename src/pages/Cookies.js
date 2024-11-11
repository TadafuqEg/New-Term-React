import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css"



const Cookies = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div id='togg' className={`page ${theme}`}>
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
            <Navbar />
            <div className='privacy'>

                <h2>Cookies Policy</h2>
                <h5>Effective Date: 07 November 2024</h5>
                <p>This Cookies Policy explains how TERM.ae uses cookies and
                    similar tracking technologies on our website. By using our
                    website, you agree to the use of cookies as described in this
                    policy. You can manage your cookie preferences at any time, as
                    detailed below.
                </p>

                <h3>1. What are Cookies?</h3>
                <p>Cookies are small text files stored on your device (computer,
                    smartphone, tablet) by websites you visit. They help websites
                    remember information about your visit, making it easier to
                    interact with and navigate the site. Cookies can also be used to
                    provide more relevant advertising or to track site performance.
                </p>


                <h3>2. Why We Use Cookies</h3>
                <p>TERM.ae uses cookies to:<br />
                    • Improve the functionality and performance of our website.<br />
                    • Understand how visitors interact with our content.<br />
                    • Enhance user experience by personalizing content and
                    providing targeted information.<br />
                    • Facilitate advertising and marketing efforts to provide relevant
                    messages and offers.
                </p>



                <h3>3. Types of Cookies We Use</h3>
                <p>TERM.ae uses various types of cookies to enhance the user
                    experience. Below are the main categories of cookies we may
                    use:<br />
                    a) Strictly Necessary Cookies<br />
                    These cookies are essential for the website to function properly.
                    They allow you to navigate the site and use basic features, such
                    as accessing secure areas. Without these cookies, certain services
                    cannot be provided.<br />
                    • Examples: Session cookies, authentication cookies.<br />
                    b) Performance and Analytics Cookies<br />
                    These cookies help us understand how visitors use our website by
                    collecting information on user interactions, such as pages visited
                    and time spent on each page. This information is aggregated and
                    anonymized, helping us improve site functionality and
                    performance.<br />
                    • Examples: Google Analytics, heat mapping tools.<br />
                    c) Functional Cookies<br />
                    Functional cookies allow us to remember choices you make on
                    our site, such as language preferences, and to provide enhanced,
                    personalized features. These cookies may also enable requested
                    functions like live chat support.<br />
                    • Examples: User preferences, personalization cookies.<br />
                    d) Advertising and Targeting Cookies<br />
                    These cookies are used to deliver advertisements that are
                    relevant to you. They help us measure the effectiveness of our
                    advertising campaigns and may be used to show you ads based
                    on your previous interactions with our site or to limit how often
                    you see an ad.<br />
                    • Examples: Social media cookies, third-party advertising
                    platforms like Google Ads or Facebook Pixel.
                </p>

                <h3>4. Third-Party Cookies</h3>
                <p>In addition to TERM.ae’s cookies, third parties (such as analytics
                    providers, advertisers, and social media platforms) may set
                    cookies on your device when you visit our site. These third parties
                    may collect information about your online activities across
                    different websites and over time.<br />
                    • Examples of Third-Party Cookies: Google Analytics,
                    Facebook Pixel, LinkedIn Insight Tag.<br />
                    Please review the privacy policies of these third-party services for
                    further details on how they use cookies.
                </p>

                <h3>5. Managing Your Cookie Preferences</h3>
                <p>You have the option to manage and control the cookies used on
                    our website:<br />
                    • Browser Settings: Most web browsers allow you to control
                    cookies through your browser settings. You can choose to block
                    or delete cookies, but note that doing so may impact your
                    experience on our website. For instructions on managing
                    cookies, consult your browser’s help menu.<br />
                    • Cookie Consent Tool: When you first visit TERM.ae, you will
                    be presented with a cookie banner that allows you to accept or
                    manage your cookie preferences. You can update your
                    preferences at any time by clicking on “Cookie Preferences” at
                    the bottom of our website.<br />
                    • Opt-Out Mechanisms for Analytics and Advertising: Some
                    analytics and advertising services, such as Google Analytics and
                    Facebook, provide opt-out options to manage how your data is
                    used. For example, you can opt-out of Google Analytics by
                    installing the Google Analytics Opt-Out Browser Add-on.
                </p>

                <h3>6. Your Rights Regarding Cookies</h3>
                <p>Depending on your location, you may have additional rights
                    regarding cookies and personal data, such as the right to request
                    access to or deletion of any personal data collected through
                    cookies. Please refer to our Privacy Policy for more details on your
                    rights and how to exercise them.
                </p>

                <h3>7. Updates to this Cookies Policy</h3>
                <p>We may periodically update this Cookies Policy to reflect changes
                    in our practices, technology, or legal requirements. Any changes
                    will be posted here, with the “Effective Date” updated at the top
                    of this policy. We encourage you to review this Cookies Policy
                    regularly to stay informed about our use of cookies.
                </p>


                <h3>8. Contact Us</h3>
                <p>If you have questions about this Cookies Policy or how TERM.ae
                    uses cookies, please contact us at:<br />
                    <span>Email:</span> <span><a>privacy@term.ae</a></span><br />
                    <span>Mailing Address:</span> TERM.ae, Office 2210 Concord Tower, Dubai
                    Media City, Dubai, UAE.</p>

            </div>
        </div>
    );
};

export default Cookies;