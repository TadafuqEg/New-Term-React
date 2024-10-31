import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import { Link, useNavigate } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css";
import "../components/nav.css"
import darkLogo from '../assets/imgs/logo2.svg';
import lightLogo from '../assets/imgs/logo.svg';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // For redirection

    const { theme, toggleTheme } = useTheme();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://term.ae/api/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });

            if (response.status === 200) {
                // If login is successful, redirect to the home page
                navigate('/');
            } else {
                setError('Invalid credentials. Please try again.');
            }

        } catch (err) {
            setError('Login failed. Please check your username or password.');
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div id='togg' className={`page ${theme}`}>
            <div className='login'>
                <div className='nav-plus'>
                    <div className='logo'>
                        <Link to='/'>
                            <img
                                src={theme === 'light' ? lightLogo : darkLogo}
                                alt="logo"
                                className="logo-img"
                            />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <a className='convert' href='/signup'>Signup</a>
                        </li>
                        <li>
                            <svg onClick={toggleTheme} stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                                className="dark-toggle hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer"
                                height="26" width="26" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>

                <div className="log-sec-1">
                    <div className="login-text">
                        <h5>Welcome Back</h5>
                        <p>Login to Your account</p>
                    </div>
                    <div className="login-form">
                        <form onSubmit={handleLogin}>
                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <input
                                    placeholder="Your Username"
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="password">
                                <label htmlFor="password">Password</label>
                                <input
                                    placeholder="Your Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <a>Forget Password?</a>
                            </div>
                            {error && <p style={{ color: 'red',textAlign:'start' }}>{error}</p>}
                            <button type="submit" className="form-btn">Login</button>
                        </form>
                    </div>
                    <Link to='/signup' className='donot'>Don’t you have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
