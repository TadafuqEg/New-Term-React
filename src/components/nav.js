import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './nav.css';
import darkLogo from '../assets/imgs/logo2.svg';
import lightLogo from '../assets/imgs/logo.svg';
import { useTheme } from '../context/ContextTheme';
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const location = useLocation(); // Get current path

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };
    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };

    const isDropdownActive = (dropdownPaths) => {
        return dropdownPaths.some((path) => location.pathname.includes(path));
    };
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar ${theme}`}>
            <div className='logo'>
                <a href='/'>
                    <img
                        src={theme === 'light' ? lightLogo : darkLogo}
                        alt="logo"
                        className="logo-img"

                    />
                </a>
            </div>
            <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? '✖' : '☰'}
            </button>

            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <li className="nav-item xx">
                    <NavLink exact to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                        Home
                    </NavLink>
                </li>

                <li className="nav-item xx">
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                        About Us
                    </NavLink>
                </li>
                <li className="nav-item xx">
                    <span className={`nav-item ${isDropdownActive(['/reputition-montiring', '/competitive', '/market-campaign', '/risk', '/influencer', '/authenticity']) ? 'active' : ''}`} onClick={toggleDropdown}>
                        LISTENING SERVICES <TiArrowSortedDown className='arr' />
                    </span>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/reputition-montiring" onClick={() => setIsMobileMenuOpen(false)}>Reputation & Perception Monitoring</NavLink></li>
                            <li><NavLink to="/competitive" onClick={() => setIsMobileMenuOpen(false)}>Competitive intelligence</NavLink></li>
                            <li><NavLink to="/market-campaign" onClick={() => setIsMobileMenuOpen(false)}>Marketing campaign Evaluation</NavLink></li>
                            <li><NavLink to="/risk" onClick={() => setIsMobileMenuOpen(false)}>Risk & Crisis Recognition And Anticipation</NavLink></li>
                            <li><NavLink to="/influencer" onClick={() => setIsMobileMenuOpen(false)}>Influencer & Profiles Identification</NavLink></li>
                            <li><NavLink to="/authenticity" onClick={() => setIsMobileMenuOpen(false)}>Authenticity Analysis, Fact Checking & Bots Detection</NavLink></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item xx">
                    <span className={`nav-item ${isDropdownActive(['/amplification', '/reputation', '/tactical', '/marketing', '/large-scale']) ? 'active' : ''}`} onClick={toggleDropdown1}>
                        RESPONSIVE SOLUTIONS <TiArrowSortedDown className='arr' /></span>
                    {isDropdownOpen1 && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/amplification" onClick={() => setIsMobileMenuOpen(false)}>Amplification</NavLink></li>
                            <li><NavLink to="/reputation" onClick={() => setIsMobileMenuOpen(false)}>Reputation</NavLink></li>
                            <li><NavLink to="/tactical" onClick={() => setIsMobileMenuOpen(false)}>Tactical</NavLink></li>
                            <li><NavLink to="/marketing" onClick={() => setIsMobileMenuOpen(false)}>Marketing</NavLink></li>
                            <li><NavLink to="/large-scale" onClick={() => setIsMobileMenuOpen(false)}>Large scale</NavLink></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item xx">
                    <span className={`nav-item ${isDropdownActive(['/success', '/markets-cryptocurrency', '/ministries-departments', '/banking-insurance', '/education', '/airlines', '/mass-retail', '/telco', '/oil-gas', '/theme-amusement-parks', '/FMCG', '/luxury', '/fashion']) ? 'active' : ''}`} onClick={toggleDropdown2}>
                        SUCCESS STORIES<TiArrowSortedDown className='arr' /></span>
                    {isDropdownOpen2 && (
                        <ul className="dropdown-menu">
                            <li><NavLink to="/success" onClick={() => setIsMobileMenuOpen(false)}>Success Stories</NavLink></li>
                            <li><NavLink to="/markets-cryptocurrency" onClick={() => setIsMobileMenuOpen(false)}>Markets</NavLink></li>
                            <li><NavLink to="/ministries-departments" onClick={() => setIsMobileMenuOpen(false)}>Industries</NavLink></li>
                        </ul>
                    )}
                </li>
                <li className="nav-item xx">
                    <span className={`nav-item ${isDropdownActive(['/hoo-talk', '/mass-analytics']) ? 'active' : ''}`} onClick={toggleDropdown3}>
                    Special/Marketing Products <TiArrowSortedDown className='arr' /></span>
                    {/* <span>SPECIAL/MARKETING PRODUCTS <TiArrowSortedDown className='arr' /></span> */}
                    {isDropdownOpen3 && (
                        <ul className="dropdown-menu">
                            <li><Link to="/hoo-talk" onClick={() => setIsMobileMenuOpen(false)}>HOOTALK</Link></li>
                            <li><Link to="/mass-analytics" onClick={() => setIsMobileMenuOpen(false)}>Mass Analytics</Link></li>

                        </ul>
                    )}
                </li>
                <li className="nav-item xx"><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
