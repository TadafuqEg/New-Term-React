import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/nav';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css"



const Privacy = () => {
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

                <h2>Privacy Notice</h2>
                <h5>Effective Date: 07 November 2024</h5>
                <p>Thank you for visiting TERM.ae. Your privacy is of paramount
                    importance to us, and this Privacy Notice explains how we handle
                    your personal information when you interact with our website,
                    products, or services. We are dedicated to safeguarding your
                    personal data and managing it transparently, in line with our
                    commitment to integrity and customer care.
                </p>

                <h3>1. About TERM.ae and This Notice</h3>
                <p>TERM.ae, along with its affiliates (“TERM” or “we”), values your
                    privacy and prioritizes the secure and ethical management of
                    your personal data. This Privacy Notice provides information on
                    what data we collect, how we use it, and the steps we take to
                    protect it. Our products and services are designed primarily for
                    business clients, not individual consumers.
                </p>
                <h3>2. Scope of This Privacy Notice</h3>
                <p>This Notice applies to the personal information collected through:<br />
                    • Your interactions with our website and online services.<br />
                    • Communications and engagements with our team.<br />
                    • Any inquiries or requests regarding our products.<br />
                </p>
                <p>Our goal is to be transparent about our data practices, so if you
                    have questions or need further clarification, please reach out to
                    us at <span><a>privacy@term.ae.</a></span>
                </p>


                <h3>3. Information We Collect</h3>
                <p>TERM.ae collects personal information in the following ways:<br /><br/>  
                    a) Information You Provide
                    You may directly provide us with personal data when you:<br />
                    • Register for an account or purchase services.<br />
                    • Contact us through forms, emails, or phone.<br />
                    • Request information or updates on our products.<br />
                    Examples of Information Provided:<br />
                    • Contact Information: Your name, email, phone number.<br />
                    • Account and Billing Information: Business name,
                    payment details, billing address.<br />
                    • Communication Preferences: Choices for receiving
                    marketing and service-related messages.<br /><br />
                    b) Information Collected Automatically
                    When you use our website, we may collect data through
                    automated technologies, such as:<br />
                    • Usage Data: Information about your interactions with our
                    website (e.g., pages visited, time spent).<br />
                    • Device Information: IP addresses, browser types, device
                    identifiers.<br />
                    • Cookies and Tracking Data: Cookies and similar technologies
                    that collect data on how you use our site.
                    Cookies Note: We use cookies to enhance your user experience
                    and personalize content. For details on managing cookies,
                    please see our Cookie Policy.<br /><br />
                    c) Information from Third Parties
                    In certain situations, we may receive information about you from
                    authorized third parties:<br />
                    • Social Media and Integrated Services: Data from social
                    networks when linked to TERM.ae.<br />
                    • Public Sources: Information from public records or directories.
                    We collect and use this data only in accordance with your rights
                    and applicable laws.<br />
                </p>

                <h3>4. How We Use Your Information</h3>
                <p>Your personal information is processed for specific purposes that
                    support your experience with TERM.ae, including:<br />
                    • Providing and Enhancing Services: Ensuring functionality,
                    improving our products, and delivering content tailored to your
                    preferences.<br />
                    • Communication: Responding to your inquiries, sending
                    important notices about your account, and sharing marketing
                    information if you have opted in.<br />
                    • Business Operations: Supporting operations such as billing,
                    account management, and client relations.<br />
                    • Legal Compliance and Security: Protecting TERM.ae, our
                    users, and the public by ensuring security, compliance, and
                    fraud prevention.<br />
                    We may combine data obtained from different sources to offer a
                    seamless and consistent experience across our products and
                    services.
                </p>

                <h3>5. Information Sharing</h3>
                <p>TERM.ae does not sell or distribute your personal information to
                    third parties without consent. However, we may share data as
                    necessary in the following scenarios:<br />
                    • Affiliates: Sharing with TERM.ae affiliates to assist in delivering
                    and supporting our services.<br />
                    • Service Providers: Authorized partners who help facilitate our
                    business, such as hosting providers, payment processors, or
                    marketing agencies.<br />
                    • Compliance and Legal Requests: Disclosing information
                    when legally required, for instance, to comply with court orders,
                    regulations, or respond to lawful government inquiries.<br />
                    • Business Transactions: In the event of a merger, acquisition,
                    or asset sale, personal data may be transferred to the acquiring
                    entity.<br />
                    We ensure that all third-party relationships are governed by data
                    protection agreements and require adherence to similar security
                    standards.
                </p>

                <h3>6. Data Security</h3>
                <p>TERM.ae implements a range of security measures to protect your
                    personal information from unauthorized access, disclosure, or
                    alteration. Our security protocols include:<br />
                    • Technical Measures: Secure servers, encryption, firewalls.<br />
                    • Administrative Controls: Regular training, role-based access
                    restrictions, and audit practices.<br />
                    We retain your personal data for as long as necessary to fulfill the
                    purposes outlined in this Notice, or as required by law.
                </p>

                <h3>7. Your Rights and Choices</h3>
                <p>Depending on your jurisdiction, you may have rights regarding
                    the use and management of your personal information, including:<br />
                    • Access and Correction: Request access to your data or
                    correct any inaccuracies.<br />
                    • Deletion: Request the removal of personal data where
                    applicable.<br />
                    • Opt-Out of Marketing: Decline marketing communications via
                    the “unsubscribe” link in emails or by contacting us directly.<br />
                    To exercise any of these rights, please contact us at
                    <span><a>privacy@term.ae</a></span>. We respond promptly and in accordance with
                    applicable laws.
                </p>

                <h3>8. International Data Transfers</h3>
                <p>TERM.ae operates globally, and personal information may be
                    transferred to jurisdictions outside your own. We take steps to
                    ensure that any international transfers comply with data
                    protection laws, applying adequate safeguards to protect your
                    data wherever it may be processed.
                </p>


                <h3>9. Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar technologies to provide a personalized
                    browsing experience and enhance our site’s functionality. You can
                    manage your cookie preferences through your browser settings or
                    by clicking the “Cookie Preferences” link at the bottom of our
                    website.<br />
                    For more details on how we use cookies, please refer to our
                    Cookie Policy.
                </p>

                <h3>10. Updates to This Privacy Notice</h3>
                <p>This Privacy Notice may be updated periodically. We recommend
                    reviewing it regularly to stay informed of any changes. Any
                    modifications will be communicated via updates on this page,
                    with the date of the latest revision listed at the top.
                </p>


                <h3>Contact Us</h3>
                <p>If you have any questions about this Privacy Notice or wish to
                    exercise your rights, feel free to reach us at:<br />
                    <span>Email:</span> <span><a>privacy@term.ae</a></span><br />
                    <span>Mailing Address:</span> TERM.ae, Office 2210 Concord Tower, Dubai
                    Media City, Dubai, UAE.</p>

            </div>
        </div>
    );
};

export default Privacy;
