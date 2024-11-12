import React, { useState } from 'react';
import { useTheme } from '../context/ContextTheme';
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import {Link , useNavigate } from 'react-router-dom';
import "../App.css";
import darkLogo from '../assets/imgs/logo2.svg';
import lightLogo from '../assets/imgs/logo.svg';

const Signup = () => {
    const { theme, toggleTheme } = useTheme();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://term.ae/api/register', {
                name,
                username,
                phone,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Check if the response indicates success
            if (response.data.success) {
                setSuccessMessage('Account created successfully!');
                setTimeout(() => {
                    navigate('/'); // Redirect to login page after successful sign-up
                }, 2000);
            } else {
                // If success is false, show the error message
                setError(response.data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            // Handle error responses
            if (err.response) {
                // The request was made and the server responded with a status code
                setError(err.response.data.message || 'Registration failed. Please try again.');
                console.error('Error response:', err.response.data);
            } else if (err.request) {
                // The request was made but no response was received
                setError('No response from server. Please try again later.');
                console.error('Error request:', err.request);
            } else {
                // Something happened in setting up the request
                setError('Error: ' + err.message);
                console.error('Error message:', err.message);
            }
        }
    };

    return (
        <div id='togg' className={`page ${theme}`}>

            <div className='login signup'>
                <div className='nav-plus'>
                    <div className='logo'>
                        <Link to='https://dev-nextjs.term.ae'>
                            <img
                                src={theme === 'light' ? lightLogo : darkLogo}
                                alt="logo"
                                className="logo-img"
                            />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <a className='convert' href='/login'>login</a>
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
                
                <div className="sign-sec-1">
                    <div className="login-text">
                        <h5>Welcome To Term</h5>
                        <p>Register Your account</p>
                    </div>

                    <div className="login-form">
                        <form onSubmit={handleSignup}>
                            <div className="username name">
                                <label htmlFor="name">Name</label>
                                <input
                                    placeholder="Your Full Name"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <input
                                    placeholder="Your Username"
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="phone">
                                <label htmlFor="username">Phone</label>
                                <input
                                    placeholder="Your Phone"
                                    type="text"
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="username email">
                                <label htmlFor="email">Email</label>
                                <input
                                    placeholder="example@example.com"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
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
                            </div>
                            <button type="submit" className="form-btn">Sign Up</button>
                        </form>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;





// import React, { useState } from 'react';
// import { useTheme } from '../context/ContextTheme';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import lightLogo from '../assets/imgs/logo2.svg';
// import darkLogo from '../assets/imgs/logo.svg';
// import "../App.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Signup = () => {
//     const { theme, toggleTheme } = useTheme();
//     const [name, setName] = useState('');
//     const [username, setUsername] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         // Prepare form data for multipart/form-data request
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('username', username);
//         formData.append('phone', phone);
//         formData.append('email', email);
//         formData.append('password', password);

//         try {
//             const response = await axios.post('https://term.ae/api/register', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 }
//             });

//             if (response.data.success) {
//                 toast.success("Account created successfully!");
//                 setTimeout(() => navigate('/'), 2000);
//             } else {
//                 toast.error(response.data.message || 'Registration failed. Please try again.');
//             }
//         } catch (err) {
//             if (err.response) {
//                 toast.error(err.response.data.message || 'Registration failed. Please try again.');
//             } else if (err.request) {
//                 toast.error('No response from server. Please try again later.');
//             } else {
//                 toast.error('Error: ' + err.message);
//             }
//         }
//     };

//     return (
//         <div id='togg' className={`page ${theme}`}>
//             <ToastContainer />
//             <div className='login signup'>
//                 <div className='nav-plus'>
//                     <div className='logo'>
//                         <Link to='/'>
//                             <img
//                                 src={theme === 'light' ? lightLogo : darkLogo}
//                                 alt="logo"
//                                 className="logo-img"
//                             />
//                         </Link>
//                     </div>
//                     <ul>
//                         <li>
//                             <a className='convert' href='/login'>login</a>
//                         </li>
//                         <li>
//                             <svg onClick={toggleTheme} stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16"
//                                 className="dark-toggle hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer"
//                                 height="26" width="26" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="..."></path>
//                             </svg>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="sign-sec-1">
//                     <div className="login-text">
//                         <h5>Welcome To Term</h5>
//                         <p>Register Your account</p>
//                     </div>

//                     <div className="login-form">
//                         <form onSubmit={handleSignup}>
//                             <div className="username name">
//                                 <label htmlFor="name">Name</label>
//                                 <input
//                                     name="name"
//                                     placeholder="Your Full Name"
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="username">
//                                 <label htmlFor="username">Username</label>
//                                 <input
//                                     name="username"
//                                     placeholder="Your Username"
//                                     type="text"
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="phone">
//                                 <label htmlFor="phone">Phone</label>
//                                 <input
//                                     name="phone"
//                                     placeholder="Your Phone"
//                                     type="text"
//                                     value={phone}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="username email">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                     name="email"
//                                     placeholder="example@example.com"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="password">
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                     name="password"
//                                     placeholder="Your Password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="form-btn">Sign Up</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;
