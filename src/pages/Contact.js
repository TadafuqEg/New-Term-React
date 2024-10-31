import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import Navbar from '../components/nav';
import img1 from "../assets/imgs/img28.png";
import img2 from "../assets/imgs/img29.png";
import img3 from "../assets/imgs/img30.png";
import "../App.css";

const Contact = () => {
    const { theme, toggleTheme } = useTheme();

    // States to manage form data and responses
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handler for form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://term.ae/api/contact-us',
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 4|Xh2UbNJ1DPJVde74FAreSuFpm7x5voKU2UvQp9Q8d07af66c'
                    }
                }
            );

            console.log("Response Data:", response); // Log to confirm response structure

            if (response.status === 200) {
                setSuccessMessage("Message sent successfully!");
                setErrorMessage("");
            } else {
                console.log("Unexpected response:", response.status, response.data);
                setErrorMessage("Unexpected response. Please try again.");
            }

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("Submission error:", error);

            if (error.response) {
                setErrorMessage(`Error: ${error.response.data.message || "An error occurred. Please try again."}`);
            } else {
                setErrorMessage("An error occurred. Please check your network and try again.");
            }
        }
    };



    return (
        <div id='togg' className={`page ${theme}`}>
            <div className='contact'>
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
                <Navbar />
                <div className="sec-1">
                    <div className="sec1-content">
                        <h5>Contact Us</h5>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="contact-left">
                        <h5>Let's talk with us</h5>
                        <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
                        <div className="left-content">
                            <div className="location">
                                <img className='loc-img' loading="lazy" alt="" src={img1} />
                                <p>Office 2210 Concord Tower, Dubai<br />Media City, Dubai, UAE</p>
                            </div>
                            <div className="location">
                                <img className='loc-img' loading="lazy" alt="" src={img2} />
                                <p><a href="tel:+971505835963">+971 50 583 5963</a></p>
                            </div>
                            <div className="email">
                                <img loading="lazy" alt="" src={img3} />
                                <p><a href="mailto:info@term.ae">info@term.ae</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-names">
                                <input
                                    placeholder="First Name*"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    placeholder="Last Name*"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-email">
                                <input
                                    placeholder="Email*"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-phone">
                                <input
                                    placeholder="Phone Number*"
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="message">
                                <textarea
                                    name="message"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <a><button type="submit">Send Message</button></a>
                        </form>
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
