import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './nav.css';
import lightLogo from '../assets/imgs/logo2.svg';
import darkLogo from '../assets/imgs/logo.svg';
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
                <a href='/home'>
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
                    <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                        Don’t you have an account?
                    </NavLink>
                </li>

                <li className="nav-item xx">
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
                        About Us
                    </NavLink>
                </li>

                <li className="nav-item xx"><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
