import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import img11 from "../assets/imgs/logo2.svg";
import img1 from "../assets/imgs/logo.svg";
import img20 from "../assets/imgs/img8-2.png";
import img2 from "../assets/imgs/img8.png";
import img30 from "../assets/imgs/img7-2.png";
import img3 from "../assets/imgs/img7.png";
import img40 from "../assets/imgs/img6-2.png";
import img4 from "../assets/imgs/img6.png";

const Footer = () => {

    const { theme, toggleTheme } = useTheme();
    const email = "info@term.ae";
    const subject = "Hello";

    return (
        <div className={`foooter ${theme}`}>
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="left-top">
                            <img
                                src={theme === 'light' ? img1 : img11}
                                alt="logo"
                                className="logo-img"
                            />
                            <div className="footer-imgs">
                                <a href="#">
                                    <img
                                        src={theme === 'light' ? img2 : img20}
                                        alt="logo"
                                        id="footer-linkedin"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src={theme === 'light' ? img4 : img40}
                                        alt="logo"
                                        id="footer-x"
                                    />

                                </a>
                                <a href="#">
                                    <img
                                        src={theme === 'light' ? img3 : img30}
                                        alt="logo"
                                        id="footer-whatsapp"
                                    />

                                </a>
                            </div>
                        </div>
                        <div className="left-bottom">
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="footer-right f-r">
                        <p>Phone: +971540845510</p>
                        <p>Address: Office 2210 Concord Tower, Dubai <br /> Media City, Dubai, UAE</p>
                        <p><a className='m-a' href={`mailto:${email}?subject=${encodeURIComponent(subject)}}`}>info@term.ae</a></p>
                        <a href="/contact" className="footer-contact">Contact Us</a>
                    </div>
                </div>
        </div>
    )
}
export default Footer;