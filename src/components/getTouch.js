import React, { useState } from "react";
import axios from 'axios';
import Notification from '../components/Notification'; // Import the Notification component

const GetTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        co_email: '',
        service: '',
        privacyAccepted: false
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Update form state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.privacyAccepted) {
            setErrorMessage("Please accept the privacy policy.");
            return;
        }

        try {
            const response = await axios.post(
                'https://term.ae/api/join-us',
                {
                    name: formData.name,
                    co_email: formData.co_email,
                    service: formData.service
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 4|Xh2UbNJ1DPJVde74FAreSuFpm7x5voKU2UvQp9Q8d07af66c'
                    }
                }
            );

            if (response.status === 200 || response.status === 204) {
                setSuccessMessage("Message sent successfully!");
                setErrorMessage("");
                setFormData({
                    name: '',
                    co_email: '',
                    service: '',
                    privacyAccepted: false
                });
            } else {
                setErrorMessage("Unexpected response. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    // Reset success and error messages after notification closes
    const closeNotification = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

    return (
        <div className="sec-5 contacts" id="getIn">
            <h5>Get in Touch</h5>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder="Company Email"
                        type="email"
                        name="co_email"
                        value={formData.co_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="select">
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">What would you like to speak to us about</option>
                        <option value="Reputation & Perception Monitoring">Reputation & Perception Monitoring</option>
                        <option value="Competitive intelligence">Competitive intelligence</option>
                        <option value="Marketing campaign Evaluation">Marketing campaign Evaluation</option>
                        <option value="Risk & Crisis Recognition And Anticipation">Risk & Crisis Recognition And Anticipation</option>
                        <option value="Influencer & Profiles Identification">Influencer & Profiles Identification</option>
                        <option value="Authenticity Analysis, Fact Checking & Bots Detection">Authenticity Analysis, Fact Checking & Bots Detection</option>
                        <option value="Amplification">Amplification</option>
                        <option value="Reputation">Reputation</option>
                        <option value="Tactical">Tactical</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Large scale">Large scale</option>
                    </select>
                </div>
                <div className="privacy-accept">
                    <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                    />
                    <span>I have read and accept the Privacy policy.</span>
                </div>
                <a><button type="submit">Send Message</button></a>
            </form>
            {successMessage && (
                <Notification message={successMessage} type="success" onClose={closeNotification} />
            )}
            {errorMessage && (
                <Notification message={errorMessage} type="error" onClose={closeNotification} />
            )}
        </div>
    );
};

export default GetTouch;
